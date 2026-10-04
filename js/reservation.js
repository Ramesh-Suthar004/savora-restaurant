/* ==========================================
   SAVORA - RESERVATION SYSTEM
========================================== */


/* ================= VARIABLES ================= */

let selectedTable = null;


/* ================= DATE ================= */

const dateInput =
    document.getElementById("reservationDate");


const today =
    new Date().toISOString().split("T")[0];


dateInput.min = today;

dateInput.value = today;


/* ================= TABLE SELECTION ================= */

function selectTable(table) {

    document
        .querySelectorAll(".restaurant-table")
        .forEach(item => {

            item.classList.remove(
                "selected-table-button"
            );

        });


    table.classList.add(
        "selected-table-button"
    );


    selectedTable = {

        id: table.dataset.table,

        seats: Number(
            table.dataset.seats
        )

    };


    document.getElementById(
        "selectedTableText"
    ).textContent =
        selectedTable.id +
        " • " +
        selectedTable.seats +
        " Seats";


    document.getElementById(
        "summaryTable"
    ).textContent =
        selectedTable.id;

}


/* ================= FORM SUMMARY ================= */

dateInput.addEventListener(
    "change",
    updateSummary
);


document
    .getElementById("reservationTime")
    .addEventListener(
        "change",
        updateSummary
    );


document
    .getElementById("guestCount")
    .addEventListener(
        "change",
        updateSummary
    );


function updateSummary() {

    const date =
        dateInput.value;

    const time =
        document.getElementById(
            "reservationTime"
        ).value;

    const guests =
        document.getElementById(
            "guestCount"
        ).value;


    document.getElementById(
        "summaryDate"
    ).textContent =
        date || "—";


    document.getElementById(
        "summaryTime"
    ).textContent =
        time || "—";


    document.getElementById(
        "summaryGuests"
    ).textContent =
        guests;


    /* Automatically highlight suitable tables */

    const guestNumber =
        Number(guests);


    document
        .querySelectorAll(
            ".available-table"
        )
        .forEach(table => {

            const seats =
                Number(
                    table.dataset.seats
                );


            if (seats >= guestNumber) {

                table.style.opacity = "1";

            } else {

                table.style.opacity = "0.45";

            }

        });

}


/* ================= FORM SUBMISSION ================= */

document
    .getElementById("reservationForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "guestName"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "guestPhone"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "guestEmail"
                    )
                    .value
                    .trim();


            const date =
                dateInput.value;


            const time =
                document
                    .getElementById(
                        "reservationTime"
                    )
                    .value;


            const guests =
                document
                    .getElementById(
                        "guestCount"
                    ).value;


            const seating =
                document
                    .getElementById(
                        "seatingPreference"
                    ).value;


            const request =
                document
                    .getElementById(
                        "specialRequest"
                    ).value
                    .trim();


            /* VALIDATION */

            if (!date) {

                showToast(
                    "Please select a date."
                );

                return;

            }


            if (!time) {

                showToast(
                    "Please select a time."
                );

                return;

            }


            if (!selectedTable) {

                showToast(
                    "Please select a table."
                );

                return;

            }


            if (
                selectedTable.seats <
                Number(guests)
            ) {

                showToast(
                    "Please select a larger table."
                );

                return;

            }


            /* RESERVATION OBJECT */

            const reservation = {

                id:
                    "SAV-" +
                    Math.floor(
                        100000 +
                        Math.random() * 900000
                    ),

                name: name,

                phone: phone,

                email: email,

                date: date,

                time: time,

                guests: guests,

                table: selectedTable.id,

                seating: seating,

                request: request,

                createdAt:
                    new Date().toISOString()

            };


            /* SAVE */

            const reservations =
                JSON.parse(
                    localStorage.getItem(
                        "savoraReservations"
                    )
                ) || [];


            reservations.push(
                reservation
            );


            localStorage.setItem(
                "savoraReservations",
                JSON.stringify(
                    reservations
                )
            );


            /* SHOW CONFIRMATION */

            showConfirmation(
                reservation
            );

        }
    );


/* ================= CONFIRMATION ================= */

function showConfirmation(
    reservation
) {

    document.getElementById(
        "reservationId"
    ).textContent =
        reservation.id;


    document.getElementById(
        "confirmationDetails"
    ).innerHTML = `

        <strong>Guest:</strong>
        ${reservation.name}
        <br>

        <strong>Date:</strong>
        ${reservation.date}
        <br>

        <strong>Time:</strong>
        ${reservation.time}
        <br>

        <strong>Guests:</strong>
        ${reservation.guests}
        <br>

        <strong>Table:</strong>
        ${reservation.table}
        <br>

        <strong>Preference:</strong>
        ${reservation.seating}

    `;


    document
        .getElementById(
            "successOverlay"
        )
        .classList.add("active");

}


/* ================= CLOSE ================= */

function closeSuccess() {

    document
        .getElementById(
            "successOverlay"
        )
        .classList.remove("active");


    document
        .getElementById(
            "reservationForm"
        )
        .reset();


    selectedTable = null;


    document
        .querySelectorAll(
            ".restaurant-table"
        )
        .forEach(table => {

            table.classList.remove(
                "selected-table-button"
            );

        });


    document.getElementById(
        "selectedTableText"
    ).textContent =
        "No table selected";


    document.getElementById(
        "summaryTable"
    ).textContent =
        "—";


    dateInput.value = today;

}


/* ================= DARK MODE ================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "savoraTheme",
        isDark ? "dark" : "light"
    );

}


if (
    localStorage.getItem(
        "savoraTheme"
    ) === "dark"
) {

    document.body.classList.add(
        "dark"
    );

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* INITIAL SUMMARY */

updateSummary();