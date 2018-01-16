/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018/1/15 下午3:44
 */

import { IControllerConstructor } from 'angular';
import { instantiate } from 'mmlpx';

export function connect(ViewModelClass: IControllerConstructor, ...dependencies: string[]) {

	class Controller {

		constructor(...args: any[]) {
			const viewModel = instantiate<IControllerConstructor>(ViewModelClass, ...args);
			return Object.assign(viewModel, this);
		}
	}

	Controller.$inject = dependencies;

	return Controller as IControllerConstructor;
}
