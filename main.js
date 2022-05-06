name_of_students = [];
document.getElementById("sort_button").style.display = "none";
function submit(){
    var display_students = [];
    var name_1 = document.getElementById("name_of_student_1").value;
    var name_2 = document.getElementById("name_of_student_2").value;
    var name_3 = document.getElementById("name_of_student_3").value;
    var name_4 = document.getElementById("name_of_student_4").value;
    var name_5 = document.getElementById("name_of_student_5").value;
    
    name_of_students.push(name_1);
    name_of_students.push(name_2);
    name_of_students.push(name_3);
    name_of_students.push(name_4);
    name_of_students.push(name_5);
    console.log(name_of_students);

    document.getElementById("display_name").innerHTML = name_of_students;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("sort_button").innerHTML = "sort";

    for(var i=1; i<=5; i++){
        var name_of_student = document.getElementById("name_of_student_" +i).value;
        console.log(name_of_student);
        name_of_students.push(name_of_student);
    }
    console.log(name_of_students);
    var length_of_name = name_of_students.length;
    console.log(length_of_name);

    for(var p=0; p<length_of_name; p++){
        display_students.push("<h4>Name- "+ name_of_students[p] + "</h4> ");
        console.log(display_students);
    }

    console.log(display_students);
    document.getElementById("display_name_with_commas").innerHTML = display_students;

    var remove_commas = display_students.join(" ");
    console.log(remove_commas);
    document.getElementById("diplay_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_students.sort();
    document.getElementById("display_name").innerHTML = name_of_students;
    console.log(name_of_students);
    document.getElementById("display_name_with_commas").innerHTML = display_students;

    var remove_commas = display_students.join(" ");
    console.log(remove_commas);
    document.getElementById("diplay_name_without_commas").innerHTML = remove_commas;

}
