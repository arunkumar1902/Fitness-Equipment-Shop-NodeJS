const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});
exports.login = (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).render('login', {
                msg: "Please enter your Email and Password",
                msg_type: "error"
            });
        }
        db.query("select * from users where email=?",[email],( error,result) => {
                console.log(result);
                if (result.length <= 0) {
                    return res.status(401).render('login', {
                        msg: "Email or Password incorrect",
                        msg_type: "error"
                    });
                }
                else if (password!= (result[0].PASS)) {
                    return res.status(401).render('login', {
                        msg: "Please enter your Email and Password",
                        msg_type: "error"
                    });
                }
                else {
                    loginornot = true;
                    res.status(200).redirect("/");
                }
            });
    } catch (error) {
        console.log(error);
    }
};

exports.register = (req, res) => {
    console.log(req.body);

    const { name, email, password, confirm_password } = req.body;
    db.query("select email from users where email=?",[email],(error, result) => {
            if (error) {
                confirm.log(error);
            }
            if (result.length > 0) {
                return res.render("register", { msg: "Email id already taken", msg_type: "error" });
            }
            // let hashedPassword = await bcrypt.hash(password, 8);

            db.query(
                "insert into users set ?",
                { name: name, email: email, pass: password },
                (error, result) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(result);
                        return res.render("register", { msg: "User registration sucess", msg_type: "good" });
                    }
                }
            );
        });

};