import {model} from './model';
import {Site} from './classes/site';
import {Sidebar} from './classes/sidebar';
//import {templates} from './template';
import './styles/main.css';

const site = new Site('#site')

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)

/*
model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())
    /!*const generate = templates[block.type]
    console.log(generate);
    if(generate){
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }*!/
});
*/

