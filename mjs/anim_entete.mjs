export class anim_entete{
constructor(elmEntete){
    this.elmEntete = elmEntete;
}

anim(){
    console.log('//////////anim///////////')
    console.log(this.elmEntete.tagName)
    let elmTitre = this.elmEntete[0];
    elmTitre.classList.add('animEntete');
    


}

}