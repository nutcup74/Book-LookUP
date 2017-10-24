test('BookLookUP', () => {
    
    let app = new BookLookUP(AmazonService)
    let isbn = '123456789abcd'
    let value = app.search(isbn)  
})