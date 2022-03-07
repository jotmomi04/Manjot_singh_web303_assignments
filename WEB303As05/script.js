
$(function (){
class  ContentItem {

    constructor(id,name,description,category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }
    updateContentItem(name,description,category) {
        if(name||description||category != null) {
            this.name = name;
            this.description = description;
        this.category = category;
        }
    }
    toString() {
        return `
                <div id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
                `;
    }
}
console.log( ContentItem);

let favmusic = [ new  ContentItem (0, "BLINDING LIGHTS	", " sing by WEEKND", "Pop"),
                new  ContentItem (1, "ROSES	", "artist is SAINT JHN", "Love"),
                new  ContentItem (2, "DON'T START NOW	", "DUA LIPA", "POP"),
                new  ContentItem (3, "SOMEONE YOU LOVED" , "LEWIS CAPALDI", "Love"),
                new  ContentItem (4, "ROCKSTAR	", " sing by DABABY FT RODDY RICCH", "Rock")
              ];
console.log(favmusic);

favmusic.forEach(function(a ,b) {
    $('#content-item-list').append(favmusic[b].toString());
    $('#content-item-list').css({"border":"1px","width":"300px","padding":"40px","margin":"20px"})



});
});
