/*index*/
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.getElementById("role").value;

        const loginMessage = document.getElementById("loginMessage");


        if (username === "" || password === "") {

            loginMessage.textContent = "Please enter username and password.";
            loginMessage.style.color = "#b3261e";

            return;
        }


        if (
            role === "admin" &&
            username === "admin" &&
            password === "admin123"
        ) {

            window.location.href = "admin-dashboard.html";

        }
        else if (
            role === "teacher" &&
            username === "teacher" &&
            password === "teacher123"
        ) {

            window.location.href = "teacher-dashboard.html";

        }
        else if (
            role === "student" &&
            username === "student" &&
            password === "student123"
        ) {

            window.location.href = "student-dashboard.html";

        }
        else {

            loginMessage.textContent = "Invalid username or password.";
            loginMessage.style.color = "#b3261e";

        }

    });

}

/*final part*/

/* ================================
   Login
================================ */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const role =
            document.getElementById("role").value;

        const loginMessage =
            document.getElementById("loginMessage");


        if (username === "" || password === "") {

            loginMessage.textContent =
                "Please enter username and password.";

            loginMessage.style.color = "#b3261e";

            return;
        }


        if (
            role === "admin" &&
            username === "admin" &&
            password === "admin123"
        ) {

            window.location.href = "admin-dashboard.html";

        }

        else if (
            role === "teacher" &&
            username === "teacher" &&
            password === "teacher123"
        ) {

            window.location.href = "teacher-dashboard.html";

        }

        else if (
            role === "student" &&
            username === "student" &&
            password === "student123"
        ) {

            window.location.href = "student-dashboard.html";

        }

        else {

            loginMessage.textContent =
                "Invalid username or password.";

            loginMessage.style.color = "#b3261e";

        }

    });

}


/* ================================
   Student Search
================================ */

const studentSearch =
    document.getElementById("studentSearch");

if (studentSearch) {

    studentSearch.addEventListener("input", function() {

        const searchText =
            studentSearch.value.toLowerCase();

        const rows =
            document.querySelectorAll("#studentTable tbody tr");


        rows.forEach(function(row) {

            const rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchText)) {

                row.style.display = "";

            }
            else {

                row.style.display = "none";

            }

        });

    });

}


/* ================================
   Teacher Search
================================ */

const teacherSearch =
    document.getElementById("teacherSearch");

if (teacherSearch) {

    teacherSearch.addEventListener("input", function() {

        const searchText =
            teacherSearch.value.toLowerCase();

        const rows =
            document.querySelectorAll("#teacherTable tbody tr");


        rows.forEach(function(row) {

            const rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchText)) {

                row.style.display = "";

            }
            else {

                row.style.display = "none";

            }

        });

    });

}


/* ================================
   Delete Button
================================ */

const deleteButtons =
    document.querySelectorAll(".delete-button");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const answer =
            confirm("Are you sure you want to delete this record?");

        if (answer) {

            const row =
                button.closest("tr");

            if (row) {

                row.remove();

            }

        }

    });

});




