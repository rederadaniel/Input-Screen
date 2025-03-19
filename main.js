    function calculate() {
        let q = +document.getElementById("quiz").value;
        let r = +document.getElementById("recitation").value;
        let l = +document.getElementById("longTest").value;
        let p = +document.getElementById("project").value;
        let a = +document.getElementById("attendance").value;
        let e = +document.getElementById("exam").value;

        // Check if any value exceeds 100
        if (q > 100 || r > 100 || l > 100 || p > 100 || a > 100 || e > 100) {
            document.getElementById("result").innerText = "❌ Error: No score should exceed 100!";
            document.getElementById("result").className = "error";
            return; // Stop the calculation if validation fails
        }

        // Calculate total grade
        let total = (q * 0.10) + (r * 0.15) + (l * 0.15) + (p * 0.35) + (a * 0.05) + (e * 0.20);

        document.getElementById("result").innerText =
            `✅ Student: ${document.getElementById("studentName").value} (ID: ${document.getElementById("studentNumber").value})\nTotal Grade: ${total.toFixed(2)}`;
        document.getElementById("result").className = ""; // Remove error style
    }
