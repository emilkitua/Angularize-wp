
export class UploadFileCtrl {
    constructor(Upload, $timeout) {
        this.Upload = Upload;
        this.$timeout = $timeout;
    }

    drop(event) {
        console.log("drop event: ", event);
    }

    allowDrop(event) {
        console.log("allow drop:", event)
        event.preventDefault();
    }

    selectFile() {
        console.log("clicked main")
         angular.element(document).find('#angularize_img_selector').triggerHandler('click');
        this.$timeout(function() {
            let el = angular.element(document).find('#angularize_img_selector');
            console.log("el: ", el);
            el.triggerHandler('click')
        });
    }

    _selectFile(event) {
        console.log("select file: ", event, this.imgFile)
    }

    upload(file, alt_text = "", caption = "") {
        let mediaUrl = window.location.origin + '/wp-json/wp/v2/media'
        this.Upload.upload({
            url: mediaUrl,
            method: 'POST',
            file: file,
            headers: {
                "Content-Disposition": 'attachment; filename=' + file.name,
                "Content-Type": file.type,
                "Cache-Control": "no-cache",
                "Data-Binary": file.name
            },
            data: {
                'caption': caption,
                'alt_text': alt_text
            }
        })
            .then((resp) => {
                this.uploadUrl = resp.data.source_url;
                this.uploadId = resp.data.id;
                if (this.onUploaded)
                    this.onUploaded({ $uploadLink: this.uploadUrl, $fileId: this.uploadId });
            }, function (resp) {
                console.log('Error uploading file: ' + resp);
            }, (evt) => {
                this.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                if (this.progress)
                    this.progress({ $uploadPercent: this.progressPercentage });
            });
    }
}

let UploadFile = {
    controller: UploadFileCtrl,
    templateUrl: 'components/upload-file.html',
    transclude: true,
    bindings: {
        progress: '&',
        onUploaded: '&',
        uploadId: '=',
        uploadUrl: '=',
        showPreview: '='
    }
}

export default UploadFile;