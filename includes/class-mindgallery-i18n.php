<?php
/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Mindgallery
 * @subpackage Mindgallery/includes
 * @author     Mindgallery <info@webmajstr.cz>
 */
class Mindgallery_i18n {

	private string $textdomain;

	public function __construct ( $textdomain )
	{
		$this->textdomain = $textdomain;
	}

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain () {

		load_plugin_textdomain(
			$this->textdomain,
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
