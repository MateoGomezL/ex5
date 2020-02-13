export class anim_entete{
    constructor(elmEntete){
        this.elmEntete = elmEntete;
    }

    anim(){
        console.log('animation');

        let elmTitre = this.elmEntete.children[0];
        elmTitre.classList.add('animEntete');
    }
    
}