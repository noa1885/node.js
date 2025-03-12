const Book = require('./books');
const User = require('./users');
let b=Book.getBook(2)
let u=User.getUser(12345)


try {
    console.log(b.toString())
console.log(u.toString())
} catch (error) {
    console.error("Dont Find"); 
}
let messeng=Check_Book(b,u)
console.log(messeng)

function Check_Book(book,user) {
    console.log("========")
    if (book.kind!=user.kind) {
        return ("u cant take it")
    }
    if (user.status=="yes") {
        return ("u cant take it")
    }

    if (book.status=="מושאל") {
        return ("u cant take it")
    }
    return (b.toString())
}