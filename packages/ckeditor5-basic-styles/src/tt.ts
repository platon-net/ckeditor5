/**
 * @license Copyright (c) 2024, Platon Technologies. All rights reserved.
 * For licensing helpdesk@platon.sk
 */

/**
 * @module basic-styles/tt
 */

import { Plugin } from 'ckeditor5/src/core.js';
import TtEditing from './tt/ttediting.js';
import TtUI from './tt/ttui.js';

import '../theme/tt.css';

/**
 * The tt feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature} guide
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/tt/ttediting~TtEditing tt editing feature}
 * and {@link module:basic-styles/tt/ttui~TtUI tt UI feature}.
 */
export default class Tt extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ TtEditing, TtUI ] as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Tt' as const;
	}
}
