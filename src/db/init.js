const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        db.exec(``)
    }
}

initDb.init()