function validateForm()
{
    try {
        const hoten = document.getElementById("hoten");
        if(hoten.ariaValueMax.length==0)
        {
            hoten.focus();
            throw "Khong de rong";
        }
        //Ma sinh vien
         const masinhvien = document.getElementById("masv");
         const patternma = /^21\d{8}$/;
         if ( patternma.test(masv)==false)
         {
             masv.focus();
             throw "Mã Sinh Viên Không Hợp Lệ!";
         }
        //Dien thoai
        const dienthoai = document.getElementById("dienthoai");
        const patterndienthoai = /(0[3|5|7|8|9])+([0-9]{8})\b/g
        if(patterndienthoai.test(dienthoai.value)==false)
        {
            dienthoai.focus();
            throw "Dien thoai khong dung";
        }
        //Email
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)==false) 
        {
            email.focus();
            throw "Email Không Hợp Lệ!";
        }
        //Lop
        const lop = document.getElementById("lop");
        const patternlop = /^CCQ[2-4]{5,6}(A||LA)$/;
        if (patternlop.test(lop) == false)
        {
            lop.focus();
            throw "Mã Lớp Không Hợp Lệ!";
        }
        return true;
    }catch (error) {
        console.log(error);
    }
    return false;
}