const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton(event) {
    $.getJSON( dataURL,handleData)

    event.preventDefault();
}

function handleData(data) {
    let text = "";
    arrInputTag=[
        "var1",
        "var2",
        "var3",
        "var4",
        "var5",
        "var6",
        "speach"
    ];

    let arrInputVar={};
    arrInputTag.forEach(function(tagVar){
        arrInputVar[tagVar] = $("input[name=" + tagVar + "]").val();
    });

    data["text"].forEach(function(dataText) {
        textTemp = dataText;
        for (const key in arrInputVar) {
            textTemp = textTemp.replace("{" + key + "}", arrInputVar[key]);
        }
        text = text + textTemp + "<br>";
    });


    console.log(text);

    $("#result").html(text);
}

function init() {
    $("#button-fetch").click(handleButton);
/*     $("#button-fetch").submit(function (e) {
        e.preventDefault(); */
}

$(document).ready(init);
