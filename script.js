$(document).ready(function () {
    var calculateBtn = $("#calculateBtn");

    var alertError = "#alertError";
    var alertBMIInfo = "#alertBMIInfo"
    var alertResult = "#alertResult";

    calculateBtn.click(function () {

        hideAllAlerts();

        var weight = parseFloat($("#weightId").val());
        var height = parseFloat($("#heightId").val());

        if (validateInputs(weight, height)) {
            var result = calculateBMI(weight, height).toFixed(2);
            showInormations(result);
        }
    })

    function validateInputs(weight, height) {

        var errorMsg = "";

        if (isNaN(weight)) {
            errorMsg += "<p>Weight is undefined</p>";
        }

        if (isNaN(height)) {
            errorMsg += "<p>Height is undefined</p>";
        }

        if (weight < 0) {
            errorMsg += "<p>Weight is less than 0</p>";
        }

        if (height < 0) {
            errorMsg += "<p>Height is less than 0</p>";
        }

        if (weight === 0) {
            errorMsg += "<p>Weight is equals 0</p>";
        }

        if (height === 0) {
            errorMsg += "<p>Height is equals 0 </p>";
        }

        if (errorMsg === "") {
            hideAlert("#alertError");
            return true;
        } else {
            createAlert("#alertError", "alert-danger", errorMsg);
            return false;
        }
    }

    function calculateBMI(weight, height) {
        var checked = $("input:checked").val();
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
        return calcMeters(weight, height) * 10000;
    }

    function showInormations(result) {
        showResult(result);
        showBMIInfo(result)
    }

    function showResult(result) {
        var msg = "Your result is <strong>" + result + "</strong>";
        createAlert(alertResult, "alert-info", msg);
    }

    function showBMIInfo(result) {
        if (result < 18.5) {
            createAlert(alertBMIInfo, "alert-danger", "<strong>Danger!</strong> You are underweight");
        } else if (result > 18.5 && result < 24.99) {
            createAlert(alertBMIInfo, "alert-success", "<strong>Success!</strong> You have normal or healthy weight");
        } else if (result > 25 && result < 29.99) {
            createAlert(alertBMIInfo, "alert-warning", "<strong>Warning!</strong> You are overweight");
        } else if (result > 30) {
            createAlert(alertBMIInfo, "alert-danger", "<strong>Danger!</strong> You are obese");
        }

    }

    function createAlert(alertId, alertType, msg) {
        $(alertId).html("<div class='alert " + alertType + "'>" + msg + "</div>");
        $(alertId).show();
    }

    function hideAlert(alertId) {
        $(alertId).hide();
    }

    function hideAllAlerts() {
        hideAlert(alertResult);
        hideAlert(alertError);
        hideAlert(alertBMIInfo);
    }
});