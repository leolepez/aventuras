<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dtecdb' );

/** MySQL database username */
define( 'DB_USER', 'dtecuser' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Sakbh2FB' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/;/JuVp~]pNLH;GQ$8Kr|+|~WtYVN0oo[yY#_@h6?mCW#M*W38<MW:]( o{;q<G%' );
define( 'SECURE_AUTH_KEY',  'a6g]<Goa[{1k>co&Ctmd3hH97[;9{)G@:G%yUR]g:n&D?D+Q6,3ej20a2in,x~|E' );
define( 'LOGGED_IN_KEY',    'tCfB7}}9;C_Wn[BOW0N;XSQd~Gm#}$de-1^=*`5ts)2aLpWQDWc)E jhmf38)TNq' );
define( 'NONCE_KEY',        '=p|:GFp*3kHkir``AoS;KlsC[I0_?rp%_b N]OnO<t-b,R*3Y< me;Pp$nilM%^b' );
define( 'AUTH_SALT',        '1^U`>P@&Kcqbwid(C&f&=}q3q+3yomaKSQ/3YvZRA$[E(;0Aklo&?@y~ULYu(:J_' );
define( 'SECURE_AUTH_SALT', 'SPPFyiCyT=(Ur_ik.o|eOHo{ryozhnMhk;Mt[[o V;d+x7zllj!_Ti&[hdP<;P27' );
define( 'LOGGED_IN_SALT',   '6w@EE!>hf<Kd<_ePHdm#]I:bw$_l<{p02u~&C}}31o^sy!>=pxy#xSV#OXRBDz/?' );
define( 'NONCE_SALT',       'xY44}{ja4kF%`d;teXIvju{$c[effQ@XY//Ts|d2;_mn OZvL`4M,dLd@{0Ot*YZ' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
