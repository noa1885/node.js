class User {
    id;
    name_user;
    kind_like;
    status;
    constructor(id, name_user, kind_like, status) {
        this.id = id;
        this.name_user = name_user;
        this.kind_like = kind_like;
        this.status = status;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name_user}, Favorite Genre: ${this.kind_like}, Borrowed Book: ${this.status}`;
    }
    static getUser(userId) {
        for (let index = 0; index < users.length; index++) {
            if (users[index].id == userId) {
                return users[index]; // מחזיר את המשתמש עצמו
            }
        }
        throw new Error("המשתמש לא נמצא");
    }
}

    const users = [
        new User(12345, "מאיר לוי", "מחשבה", "no"),
        new User(67890, "שרה כהן", "הלכה", "no"),
        new User(11223, "דוד ישראלי", "מוסר", "no"),
        new User(33445, "רבקה בלום", "הלכה", "yes"),
        new User(55667, "חיים פרידמן", "מחשבה", "yes"),
        new User(88990, "יעקב רוזן", "הלכה", "yes")
    ];
    
    

module.exports=User;
