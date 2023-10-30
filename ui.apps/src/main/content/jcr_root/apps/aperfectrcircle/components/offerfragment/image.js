"use strict";
use( function() {
    var data = {
        imageUrl: ''
    };
    var imagePath = this.imagePath;
    var editMode = this.isEditMode;
    var externalizer = sling.getService(Packages.com.day.cq.commons.Externalizer); 
    if(editMode) {
        data.imageUrl = externalizer.authorLink(resolver, imagePath)
    }

    data.imageUrl = externalizer.publishLink(resolver, imagePath);

    return data;
});