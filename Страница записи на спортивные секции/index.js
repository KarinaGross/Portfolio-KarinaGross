// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе.
// Каждое занятие имеет название, время проведения, максимальное количество участников и текущее
// количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на
// странице с указанием его названия, времени проведения, максимального количества участников и текущего
// количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество
// участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние
// кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены
// записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const classes = [
    {
        name: 'Box',
        time: '14:00',
        slots: 12,
        members: 7,
        isUserRegistered: false
    },
    {
        name: 'Yoga',
        time: '17:00',
        slots: 30,
        members: 21,
        isUserRegistered: false
    }, {
        name: 'Pilates',
        time: '9:00',
        slots: 15,
        members: 4,
        isUserRegistered: false
    }, {
        name: 'Crossfit',
        time: '12:00',
        slots: 1,
        members: 19,
        isUserRegistered: false
    }
]

const classesBox = document.querySelector('.classes');

const makeClass = (lesson) => {
    const isBooked = lesson.slots < 0;
    const newClass = `
            <h3 class="title card-title">${lesson.name}</h3>
            <div class="time card-subtitle mb-2 text-muted">${lesson.time}</div>
            <div class="slots card-text">Slots: ${lesson.slots}</div>
            <div class="members card-text">Members: ${lesson.members}</div>
            <button type="button" class="bookBtn btn btn-success" ${isBooked || lesson.isUserRegistered ? "disabled" : ""}>Book</button>
            <button type="button" class="cancelBtn btn btn-warning" ${!lesson.isUserRegistered ? "disabled" : ""}>Cancel</button>
    `
    return newClass;
}

function displayClasses(classes) {
    classes.forEach(element => {
        const lesson = document.createElement('div');
        lesson.className = "sport-class card-body";
        lesson.style.border = "solid 1px gray";
        lesson.innerHTML = makeClass(element);

        classesBox.append(lesson);
    });
}

displayClasses(classes);

function updateClasses() {
    classesBox.innerHTML = "";
    displayClasses(classes);
}

classesBox.addEventListener('click', (e) => {
    if (e.target.classList.contains("bookBtn")) {
        const classBox = e.target.closest('.sport-class');
        const className = classBox.querySelector('.title').textContent;
        console.log("Trying to book for: ", className);

        const classObject = classes.find(cls => cls.name === className);
        console.log("Found class object: ", classObject);
        if (!classObject.isUserRegistered && (classObject.slots > 0)) {
            classObject.members++;
            classObject.slots--;
            classObject.isUserRegistered = true;
        }
        updateClasses();
    }

    if (e.target.classList.contains("cancelBtn")) {
        const classBox = e.target.closest('.sport-class');
        const className = classBox.querySelector('.title').textContent;

        const classObject = classes.find(cls => cls.name === className);
        if (classObject.isUserRegistered) {
            classObject.members--;
            classObject.slots++;
            classObject.isUserRegistered = false;
        }
        updateClasses();
    }
})

