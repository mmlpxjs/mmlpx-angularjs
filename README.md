# mmlpx-angularjs
mmlpx connector to angularjs

## Installing

```she
npm i mmlpx-angularjs -S
```

## Usage
```js
import { ViewModel, postConstruct } from 'mmlpx';
import { connect } from 'mmlpx-angularjs';
import { observable, observe } from 'mobx';
import ngMobx from 'mobx-angularjs';


@ViewModel
class UserViewModel {

	@observable
	id = null;

	contructor($element) {
    	this.$element = $element;
	}

	@postConstruct
	onInit() {
		observe(this, 'id', changedValue => this.store.fetchUsers(changedValue))
	}
}

angular
	.module('app', [ngMobx])
	.component('container', {
		template: '<div mobx-autorun>{{$ctrl.id}}</div>'
		controller: connect(UserViewModel, '$element')
	});
```

 
