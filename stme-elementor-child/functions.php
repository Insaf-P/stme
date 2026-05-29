<?php
/**
 * STME — Hello Elementor Child Theme
 * functions.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* --------------------------------------------------------
   Enqueue parent + child styles and scripts
-------------------------------------------------------- */
function stme_child_enqueue() {
    $ver = '1.0.0';

    // Parent Hello Elementor stylesheet
    wp_enqueue_style(
        'hello-elementor-parent',
        get_template_directory_uri() . '/style.css',
        [],
        wp_get_theme( get_template() )->get( 'Version' )
    );

    // Google Fonts
    wp_enqueue_style(
        'stme-fonts',
        'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Cairo:wght@400;500;600;700;800&display=swap',
        [],
        null
    );

    // STME child stylesheet
    wp_enqueue_style(
        'stme-child',
        get_stylesheet_directory_uri() . '/assets/css/stme.css',
        [ 'hello-elementor-parent', 'stme-fonts' ],
        $ver
    );

    // STME JS
    wp_enqueue_script(
        'stme-child-js',
        get_stylesheet_directory_uri() . '/assets/js/stme.js',
        [],
        $ver,
        true
    );

    // Pass data to JS
    wp_localize_script( 'stme-child-js', 'STME', [
        'themeUri' => get_stylesheet_directory_uri(),
        'homeUrl'  => home_url('/'),
        'ajaxUrl'  => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('stme_contact'),
    ] );
}
add_action( 'wp_enqueue_scripts', 'stme_child_enqueue' );

/* --------------------------------------------------------
   Theme setup
-------------------------------------------------------- */
function stme_child_setup() {
    load_theme_textdomain( 'stme', get_stylesheet_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
    add_theme_support( 'custom-logo', [
        'height'      => 104,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ] );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'wp-block-styles' );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'stme' ),
        'footer'  => __( 'Footer Navigation', 'stme' ),
    ] );
}
add_action( 'after_setup_theme', 'stme_child_setup' );

/* --------------------------------------------------------
   Widget areas
-------------------------------------------------------- */
function stme_child_widgets_init() {
    register_sidebar( [
        'name'          => __( 'Sidebar', 'stme' ),
        'id'            => 'sidebar-1',
        'before_widget' => '<section class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ] );
}
add_action( 'widgets_init', 'stme_child_widgets_init' );

/* --------------------------------------------------------
   Custom post types — Insights & Jobs
-------------------------------------------------------- */
function stme_register_post_types() {
    register_post_type( 'stme_insight', [
        'labels' => [
            'name'          => __( 'Insights', 'stme' ),
            'singular_name' => __( 'Insight', 'stme' ),
            'add_new_item'  => __( 'Add New Insight', 'stme' ),
            'edit_item'     => __( 'Edit Insight', 'stme' ),
        ],
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-welcome-write-blog',
        'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
        'rewrite'      => [ 'slug' => 'insights' ],
        'show_in_rest' => true,
    ] );

    register_post_type( 'stme_job', [
        'labels' => [
            'name'          => __( 'Jobs', 'stme' ),
            'singular_name' => __( 'Job', 'stme' ),
            'add_new_item'  => __( 'Add New Job', 'stme' ),
            'edit_item'     => __( 'Edit Job', 'stme' ),
        ],
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-groups',
        'supports'     => [ 'title', 'editor', 'custom-fields' ],
        'rewrite'      => [ 'slug' => 'careers' ],
        'show_in_rest' => true,
    ] );
}
add_action( 'init', 'stme_register_post_types' );

/* --------------------------------------------------------
   Helper: STME logo HTML
   Uses child theme assets directory so the logo is available
   before a custom logo is set in the Customizer.
-------------------------------------------------------- */
function stme_logo( $class = '' ) {
    if ( has_custom_logo() ) {
        return get_custom_logo();
    }
    $src = get_stylesheet_directory_uri() . '/assets/images/stme-logo.png';
    return '<img src="' . esc_url( $src ) . '" alt="' . esc_attr( get_bloginfo('name') ) . '" class="stme-logo-img' . ( $class ? ' ' . esc_attr( $class ) : '' ) . '" />';
}

/* --------------------------------------------------------
   Helper: Eyebrow label
-------------------------------------------------------- */
function stme_eyebrow( $label ) {
    echo '<div class="eyebrow-row">' . esc_html( $label ) . '</div>';
}

/* --------------------------------------------------------
   Contact form AJAX handler
-------------------------------------------------------- */
function stme_handle_contact() {
    check_ajax_referer( 'stme_contact', 'nonce' );
    $name    = sanitize_text_field(    $_POST['name']    ?? '' );
    $email   = sanitize_email(         $_POST['email']   ?? '' );
    $company = sanitize_text_field(    $_POST['company'] ?? '' );
    $message = sanitize_textarea_field($_POST['message'] ?? '' );

    if ( ! $email || ! $name ) {
        wp_send_json_error( [ 'message' => 'Required fields missing.' ] );
    }

    $to      = get_option('admin_email');
    $subject = "New contact: {$name} — {$company}";
    $body    = "Name: {$name}\nEmail: {$email}\nCompany: {$company}\n\nMessage:\n{$message}";
    $headers = [ 'Content-Type: text/plain; charset=UTF-8', "Reply-To: {$email}" ];

    wp_mail( $to, $subject, $body, $headers );
    wp_send_json_success( [ 'message' => 'Message received.' ] );
}
add_action( 'wp_ajax_nopriv_stme_contact', 'stme_handle_contact' );
add_action( 'wp_ajax_stme_contact',        'stme_handle_contact' );

/* --------------------------------------------------------
   Meta boxes for Insights
-------------------------------------------------------- */
function stme_insight_meta_boxes() {
    add_meta_box( 'stme_insight_type', __( 'Insight Type', 'stme' ), 'stme_insight_type_cb', 'stme_insight', 'side' );
}
add_action( 'add_meta_boxes', 'stme_insight_meta_boxes' );

function stme_insight_type_cb( $post ) {
    $type  = get_post_meta( $post->ID, '_insight_type', true ) ?: 'Note';
    $types = [ 'Note', 'Customer story', 'Brief', 'News', 'Announcement', 'Award' ];
    echo '<select name="stme_insight_type" style="width:100%">';
    foreach ( $types as $t ) {
        echo '<option value="' . esc_attr($t) . '"' . selected($type, $t, false) . '>' . esc_html($t) . '</option>';
    }
    echo '</select>';
}

function stme_save_insight_meta( $post_id ) {
    if ( isset( $_POST['stme_insight_type'] ) ) {
        update_post_meta( $post_id, '_insight_type', sanitize_text_field( $_POST['stme_insight_type'] ) );
    }
}
add_action( 'save_post_stme_insight', 'stme_save_insight_meta' );
