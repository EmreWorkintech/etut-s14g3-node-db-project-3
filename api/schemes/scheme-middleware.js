/*
  Eğer `scheme_id` veritabanında yoksa 
  aşağıdaki hata mesajını dönsün:

  durum 404
  {
    "message": "scheme_id <gerçek id> id li şema bulunamadı"
  }
*/
const checkSchemeId = (req, res, next) => {

}

/*
  Eğer `scheme_name` yoksa veya 
        boş string ise veya
        string değil ise
  aşağıdaki hata mesajını dönsün:

  durum 400
  {
    "message": "Geçersiz scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  Eğer `instructions` yoksa veya 
                      boş string ise veya 
                      string değilse 
       `step_number` sayı değilse veya 
                      birden küçükse
  aşağıdaki hata mesajını dönsün:

  durum 400
  {
    "message": "Hatalı step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
