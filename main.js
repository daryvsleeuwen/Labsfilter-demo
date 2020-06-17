import labsfilter from './node_modules/labsfilter/index.js'
let webcam = document.querySelector('#webcam');
let canvas = document.querySelector('canvas');
let modelchangers = document.querySelectorAll('.modelchanger');

let texture = 'models/tiger/tiger.png';
let model = 'models/tiger/tiger.obj';

modelchangers.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.id != null){

            let id = button.id
            let texture = `models/${id}/${id}.png`;
            let model = `models/${id}/${id}.obj`;
            labsfilter.setFilterModel(texture, model);
        }
    });
});

let settings = {video: webcam, canvas: canvas, facingMode: 'user'};

labsfilter.init(settings, texture, model);
labsfilter.start();