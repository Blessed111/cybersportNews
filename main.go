package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func feedbackPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("feedback.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	t.Execute(w, nil)
}
func adminPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("admin.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	t.Execute(w, nil)
}
func matchPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("matches.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}

	t.Execute(w, nil)
}

func page1(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("page1_1.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	t.Execute(w, nil)

}

func page2(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("page2.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	t.Execute(w, nil)

}
func Sign(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("sign.html")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	t.Execute(w, nil)

}

// func checkLogin(w http.ResponseWriter, r *http.Request) {

// 	password := r.FormValue("password")
// 	email := r.FormValue("email")

// 	if email == "nurdaulet@gmail.com" && password == "nur2002" {
// 		http.Redirect(w, r, "/second", http.StatusSeeOther)
// 	} else {

// 		data := map[string]interface{}{
// 			"error": "wrong email or password",
// 		}
// 		tmp := template.Must(template.ParseFiles("sign.html"))
// 		tmp.Execute(w, data)
// 		return
// 	}
// }

func main() {
	http.HandleFunc("/", page1)
	http.HandleFunc("/sign", Sign)
	//http.HandleFunc("/checkLogin", checkLogin)
	http.HandleFunc("/second", page2)
	http.HandleFunc("/feedback", feedbackPage)
	http.HandleFunc("/matches", matchPage)
	http.HandleFunc("/admin", adminPage)
	// http.Handle("/img", http.FileServer(http.Dir("./images")))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("images"))))
	http.Handle("/css", http.FileServer(http.Dir("./css")))
	err := http.ListenAndServe(":4040", nil)
	if err != nil {
		panic(err)
	}
}
