/**
 * @license Copyright (c) 2024, Platon Technologies. All rights reserved.
 * For licensing helpdesk@platon.sk
 */

/**
 * @module basic-styles/tt/ttediting
 */

import { Plugin } from 'ckeditor5/src/core.js';
import { TwoStepCaretMovement, inlineHighlight } from 'ckeditor5/src/typing.js';

import AttributeCommand from '../attributecommand.js';

const TT = 'tt';
const HIGHLIGHT_CLASS = 'ck-tt_selected';

/**
 * The tt editing feature.
 *
 * It registers the `'tt'` command and introduces the `tt` attribute in the model which renders to the view
 * as a `<tt>` element.
 */
export default class TtEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'TtEditing' as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ TwoStepCaretMovement ] as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = this.editor.t;

		// Allow tt attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: TT } );
		editor.model.schema.setAttributeProperties( TT, {
			isFormatting: true,
			copyOnEnter: false
		} );

		editor.conversion.attributeToElement( {
			model: TT,
			view: 'tt',
			upcastAlso: {
				styles: {
					'word-wrap': 'break-word'
				}
			}
		} );

		// Create tt command.
		editor.commands.add( TT, new AttributeCommand( editor, TT ) );

		// Enable two-step caret movement for `tt` attribute.
		editor.plugins.get( TwoStepCaretMovement ).registerAttribute( TT );

		// Setup highlight over selected element.
		inlineHighlight( editor, TT, 'tt', HIGHLIGHT_CLASS );

		// Add the information about the keystroke to the accessibility database.
		editor.accessibility.addKeystrokeInfos( {
			keystrokes: [
				{
					label: t( 'Move out of an inline tt style' ),
					keystroke: [
						[ 'arrowleft', 'arrowleft' ],
						[ 'arrowright', 'arrowright' ]
					]
				}
			]
		} );
	}
}
