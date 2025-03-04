class Book {
    code;
    name;
    kind;   
    status;
    constructor(code, name, kind, status) {
        this.code = code;
        this.name = name;
        this.kind = kind;
        this.status = status;
    }
    toString()
        {
            return `name: ${this.name}, kind: ${this.kind}, borrowed?: ${this.status}`;
        }
 static  getBook(code1)
    {
        for (let index = 0; index < books.length; index++) {
           if (books[index].code==code1) {
           return books[index].toString();
           }
            
        }
        throw new Error("הספר לא נמצא");
        
    }   
    
} 

const books = [
    new Book(1, "משנה ברורה", "הלכה", "זמין"),
    new Book(2, "דרך השם", "מחשבה", "מושאל"),
    new Book(3, "קיצור שולחן ערוך", "הלכה", "זמין"),
    new Book(4, "מסילת ישרים", "מוסר", "מושאל"),
    new Book(5, "שולחן ערוך", "הלכה", "זמין")
];

module.exports=Book;
