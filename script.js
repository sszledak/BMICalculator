$(document).ready(function () {
    var calculateBtn = $("#calculateBtn");
    var msg = $("#msgId");

    calculateBtn.click(function () {
        var weight = parseFloat($("#weightId").val());
        var height = parseFloat($("#heightId").val());

        var result = $("#resultId");

        if(validateInputs(weight, height)) {
            result.val(calculateBMI(weight, height).toFixed(2));
            result.show();
        } 
    })

    function validateInputs(weight, height) {
        console.log(weight < 0 || height < 0 || weight === 0 || height === 0);
        if(weight < 0 || height < 0 || weight === 0 || height === 0) {
            msg.val("Any value is less than 0 or is equals 0 !!!");
            msg.show();
            result.hide();
            return false;
        }
        msg.hide();
        return true;
    }

    function calculateBMI(weight, height) {   
        var checked = $("input:checked" ).val(); 
        console.log(checked);
        if (checked === "m") {
            return calcMeters(weight, height);
        } else {
            return calcCentimeters(weight, height);
        }
    }

    function calcMeters(weight, height) {
        return weight / (height * height);
    }

    function calcCentimeters(weight, height) {
        return calcMeters(weight, height)*10000;
    }
});