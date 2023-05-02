<?php
/**
 * Plugin Name: Hide Admin Bar
 * Description: Плагин для отключения админ панели на фронтенд
 * Author: Slxqww
 */

 // Remove the admin bar from the front end
 add_filter( 'show_admin_var', '__return_false' );