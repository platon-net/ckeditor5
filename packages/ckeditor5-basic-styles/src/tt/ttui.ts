/**
 * @license Copyright (c) 2024, Platon Technologies. All rights reserved.
 * For licensing helpdesk@platon.sk
 */

/**
 * @module basic-styles/tt/ttui
 */

import { Plugin } from 'ckeditor5/src/core.js';
import { ButtonView, MenuBarMenuListItemButtonView } from 'ckeditor5/src/ui.js';
import { getButtonCreator } from '../utils.js';

import ttIcon from '../../theme/icons/tt.svg';

import '../../theme/tt.css';

const TT = 'tt';

/**
 * The tt UI feature. It introduces the Tt button.
 */
export default class TtUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'TtUI' as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = editor.locale.t;
		const createButton = getButtonCreator( {
			editor,
			commandName: TT,
			plugin: this,
			icon: ttIcon,
			label: t( 'TT' )
		} );

		// Add tt button to feature components.
		editor.ui.componentFactory.add( TT, () => createButton( ButtonView ) );
		editor.ui.componentFactory.add( 'menuBar:' + TT, () => createButton( MenuBarMenuListItemButtonView ) );
	}
}
