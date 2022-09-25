// https://stackoverflow.com/a/26361461/18404559
function saveAs(uri, fileName) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); // Firefox requires the link to be in the body
        link.download = fileName;
        link.href = uri;
        link.click();
        document.body.removeChild(link); // remove the link when done
    } else {
        location.replace(uri);
    }
}

pdfjsLib.getDocument(window.location.href)
    .promise
    .then(pdf => {
        console.log(pdf);
        pdf.getMetadata().then(data => {
            let info = data.info;
            let title = info.Title;
            let author = info.Author;
            let date = info.CreationDate;
            console.log(data);
            
            let name = ""
            name += title === null ? "" : title
//            name += author === null ? "" : `- ${author}`
//            name += date === null ? "" : `- ${date}`
            saveAs(window.location.href, name)
                
            console.log(title)
        })
    })
