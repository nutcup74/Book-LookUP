function BookLookUP(AmazonService) {
    this.AmazonService = AmazonService

    this.search = (isbn) => {
        let SearchSuccess = this.AmazonService(isbn)
        return SearchSuccess
    }
}


test('BookLookUP', () => {

    const AmazonService = jest.fn('123456789abcd')
    .mockReturnValue({ name: 'Dota2', cover: '58160388@gmail.com', isbn:'123456789abcd'})

    
    let app = new BookLookUP(AmazonService)
    let isbn = '123456789abcd'
    let value = app.search(isbn)  

    expect(AmazonService).toHaveBeenCalled()
    expect(AmazonService).toHaveBeenCalledWith(isbn)

})