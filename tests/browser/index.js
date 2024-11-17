/**
 * @license Copyright (c) 2024, Platon Technologies. All rights reserved.
 * For licensing helpdesk@platon.sk
 */

// Productivity features require license key to work properly, you can get a trial license key: https://orders.ckeditor.com/trial/premium-features?feature=pagination
const PRODUCTIVITY_PACK_LICENSE_KEY = '';

import '../../dist/browser/ckeditor5.css';

//import ClassicEditor from '../../dist/ckeditor5.js';
import { ClassicEditor, Essentials, Autoformat, BlockQuote, Bold, CloudServices, Code, Tt, CodeBlock, Heading, HorizontalLine,
	Image, ImageToolbar, ImageUpload, Base64UploadAdapter, Italic, Link, List, Mention, Paragraph, SourceEditing, SpecialCharacters,
	SpecialCharactersEssentials, Strikethrough, Table, TableToolbar, TextTransformation, TodoList, SlashCommand  } from '../../dist/browser/ckeditor5.js';
/*
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Tt from '@ckeditor/ckeditor5-basic-styles/src/tt';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
// Productivity Pack features
import SlashCommand from '@ckeditor/ckeditor5-slash-command/src/slashcommand';
*/

/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji(editor) {
	if (!editor.plugins.get('SpecialCharacters')) {
		return;
	}

	// Make sure Emojis are last on the list.
	this.afterInit = function () {
		editor.plugins.get('SpecialCharacters').addItems('Emoji', EMOJIS_ARRAY);
	};
}

const EMOJIS_ARRAY = [
	{ character: '🙈', title: 'See-No-Evil Monkey' },
	{ character: '🙄', title: 'Face With Rolling Eyes' },
	{ character: '🙃', title: 'Upside Down Face' },
	{ character: '🙂', title: 'Slightly Smiling Face' },
	{ character: '😴', title: 'Sleeping Face' },
	{ character: '😳', title: 'Flushed Face' },
	{ character: '😱', title: 'Face Screaming in Fear' },
	{ character: '😭', title: 'Loudly Crying Face' },
	{ character: '😬', title: 'Grimacing Face' },
	{ character: '😩', title: 'Weary Face' },
	{ character: '😢', title: 'Crying Face' },
	{ character: '😡', title: 'Pouting Face' },
	{ character: '😞', title: 'Disappointed Face' },
	{ character: '😜', title: 'Face with Stuck-Out Tongue and Winking Eye' },
	{ character: '😚', title: 'Kissing Face With Closed Eyes' },
	{ character: '😘', title: 'Face Throwing a Kiss' },
	{ character: '😔', title: 'Pensive Face' },
	{ character: '😒', title: 'Unamused Face' },
	{ character: '😑', title: 'Expressionless Face' },
	{ character: '😐', title: 'Neutral Face' },
	{ character: '😏', title: 'Smirking Face' },
	{ character: '😎', title: 'Smiling Face with Sunglasses' },
	{ character: '😍', title: 'Smiling Face with Heart-Eyes' },
	{ character: '😌', title: 'Relieved Face' },
	{ character: '😋', title: 'Face Savoring Delicious Food' },
	{ character: '😊', title: 'Smiling Face with Smiling Eyes' },
	{ character: '😉', title: 'Winking Face' },
	{ character: '😈', title: 'Smiling Face With Horns' },
	{ character: '😇', title: 'Smiling Face with Halo' },
	{
		character: '😆',
		title: 'Smiling Face with Open Mouth and Tightly-Closed Eyes',
	},
	{ character: '😅', title: 'Smiling Face with Open Mouth and Cold Sweat' },
	{ character: '😄', title: 'Smiling Face with Open Mouth and Smiling Eyes' },
	{ character: '😃', title: 'Smiling Face with Open Mouth' },
	{ character: '😂', title: 'Face with Tears of Joy' },
	{ character: '😁', title: 'Grinning Face with Smiling Eyes' },
	{ character: '😀', title: 'Grinning Face' },
	{ character: '🥺', title: 'Pleading Face' },
	{ character: '🥵', title: 'Hot Face' },
	{ character: '🥴', title: 'Woozy Face' },
	{ character: '🥳', title: 'Partying Face' },
	{ character: '🥰', title: 'Smiling Face with Hearts' },
	{ character: '🤭', title: 'Face with Hand Over Mouth' },
	{ character: '🤪', title: 'Zany Face' },
	{ character: '🤩', title: 'Grinning Face with Star Eyes' },
	{ character: '🤦', title: 'Face Palm' },
	{ character: '🤤', title: 'Drooling Face' },
	{ character: '🤣', title: 'Rolling on the Floor Laughing' },
	{ character: '🤔', title: 'Thinking Face' },
	{ character: '🤞', title: 'Crossed Fingers' },
	{ character: '🙏', title: 'Person with Folded Hands' },
	{ character: '🙌', title: 'Person Raising Both Hands in Celebration' },
	{ character: '🙋', title: 'Happy Person Raising One Hand' },
	{ character: '🤷', title: 'Shrug' },
	{ character: '🤗', title: 'Hugging Face' },
	{ character: '🖤', title: 'Black Heart' },
	{ character: '🔥', title: 'Fire' },
	{ character: '💰', title: 'Money Bag' },
	{ character: '💯', title: 'Hundred Points Symbol' },
	{ character: '💪', title: 'Flexed Biceps' },
	{ character: '💩', title: 'Pile of Poo' },
	{ character: '💥', title: 'Collision' },
	{ character: '💞', title: 'Revolving Hearts' },
	{ character: '💜', title: 'Purple Heart' },
	{ character: '💚', title: 'Green Heart' },
	{ character: '💙', title: 'Blue Heart' },
	{ character: '💗', title: 'Growing Heart' },
	{ character: '💖', title: 'Sparkling Heart' },
	{ character: '💕', title: 'Two Hearts' },
	{ character: '💔', title: 'Broken Heart' },
	{ character: '💓', title: 'Beating Heart' },
	{ character: '💐', title: 'Bouquet' },
	{ character: '💋', title: 'Kiss Mark' },
	{ character: '💀', title: 'Skull' },
	{ character: '👑', title: 'Crown' },
	{ character: '👏', title: 'Clapping Hands Sign' },
	{ character: '👍', title: 'Thumbs Up Sign' },
	{ character: '👌', title: 'OK Hand Sign' },
	{ character: '👉', title: 'Backhand Index Pointing Right' },
	{ character: '👈', title: 'Backhand Index Pointing Left' },
	{ character: '👇', title: 'Backhand Index Pointing Down' },
	{ character: '👀', title: 'Eyes' },
	{ character: '🎶', title: 'Multiple Musical Notes' },
	{ character: '🎊', title: 'Confetti Ball' },
	{ character: '🎉', title: 'Party Popper' },
	{ character: '🎈', title: 'Balloon' },
	{ character: '🎂', title: 'Birthday Cake' },
	{ character: '🎁', title: 'Wrapped Gift' },
	{ character: '🌹', title: 'Rose' },
	{ character: '🌸', title: 'Cherry Blossom' },
	{ character: '🌞', title: 'Sun with Face' },
	{ character: '❤️', title: 'Red Heart' },
	{ character: '❣️', title: 'Heavy Heart Exclamation Mark Ornament' },
	{ character: '✨', title: 'Sparkles' },
	{ character: '✌️', title: 'Victory Hand' },
	{ character: '✅', title: 'Check Mark Button' },
	{ character: '♥️', title: 'Heart Suit' },
	{ character: '☺️', title: 'Smiling Face' },
	{ character: '☹️', title: 'Frowning Face' },
	{ character: '☀️', title: 'Sun' },
];

class ClassCKEDITOR {

	env = {
		isCompatible: true,
		config: {
			removePlugins: ''
		}
	};

	instances = [];

	replace(element_name) {
		var selector = '[name="'+element_name+'"]';
		console.log(selector);
		var element = document.querySelector(selector);
		if (element == null) {
			selector = '#'+element_name;
			element = document.querySelector(selector);
		}
		if (element == null) {
			console.error('CKEDITO5: Element with selector "'+element_name+'" not found');
			return false;
		}
		ClassicEditor.create(element, {
			plugins: [
				Autoformat,
				BlockQuote,
				Bold,
				CloudServices,
				Code,
				Tt,
				CodeBlock,
				Essentials,
				Heading,
				HorizontalLine,
				Image,
				ImageToolbar,
				ImageUpload,
				Base64UploadAdapter,
				Italic,
				Link,
				List,
				// Markdown,
				Mention,
				Paragraph,
				SourceEditing,
				SpecialCharacters,
				SpecialCharactersEmoji,
				SpecialCharactersEssentials,
				Strikethrough,
				Table,
				TableToolbar,
				TextTransformation,
				TodoList,
				// SlashCommand,
			],
			licenseKey: PRODUCTIVITY_PACK_LICENSE_KEY,
			language: 'en',
			toolbar: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				//'|',
				//'heading',
				'|',
				'bold',
				'italic',
				'strikethrough',
				'code',
				'tt',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'link',
				'uploadImage',
				'insertTable',
				'blockQuote',
				'codeBlock',
				'horizontalLine',
				'specialCharacters',
			],
			codeBlock: {
				languages: [
					{ language: 'shell', label: 'Shell' },
					{ language: 'bash', label: 'Bash' },
					{ language: 'yaml', label: 'Yaml' },
					{ language: 'yaml', label: 'Log' },
					{ language: 'nginx', label: 'Nginx Config' },
					{ language: 'sql', label: 'SQL' },
					{ language: 'php', label: 'PHP' },
					{ language: 'css', label: 'CSS' },
					{ language: 'html', label: 'HTML' },
					{ language: 'xml', label: 'XML' },
					{ language: 'javascript', label: 'JavaScript' },
					{ language: 'typescript', label: 'TypeScript' },
					{ language: 'ini', label: 'INI' },
					{ language: 'c', label: 'C' },
					{ language: 'cpp', label: 'C++' },
					{ language: 'diff', label: 'Diff' },
					{ language: 'makefile', label: 'Makefile' },
					{ language: 'markdown', label: 'Markdown' },
					{ language: 'perl', label: 'Perl' },
					{ language: 'python', label: 'Python' },
					{ language: 'ruby', label: 'Ruby' },
					{ language: 'rust', label: 'Rust' },
				],
			},
			heading: {
				options: [
					{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1',
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2',
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3',
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4',
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5',
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6',
					},
				],
			},
			image: {
				toolbar: ['imageTextAlternative'],
			},
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
			},
		})
		.then((editor) => {
			//window.CKEDITOR = editor;
			window.CKEDITOR.instances.push(editor);
		})
		.catch((error) => {
			console.error('ERROR: ckeditor5-platon')
			console.error(error);
		});
	}
}

window.CKEDITOR = new ClassCKEDITOR();

// window.onload = function() {
// 	console.log('window.onload => CKEDITOR initialize');
// 	CKEDITOR.replace('#UpdateContent');
// }

window.CKEDITOR_BUIILD = '0.17';
