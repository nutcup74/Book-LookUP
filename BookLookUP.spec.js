function BookLookUP(AmazonService) {
    this.AmazonService = AmazonService

    this.search = (isbn) => {
        let SearchSuccess = this.AmazonService(isbn)
        return SearchSuccess
    }
}


test('BookLookUP', () => {

    const AmazonService = jest.fn('123456789abcd')
    .mockReturnValue({ bookname: 'Dota2', cover: '58160388@gmail.com', isbn:'123456789abcd'})

    
    let app = new BookLookUP(AmazonService)
    let isbn = '123456789abcd'
    let value = app.search(isbn)  

    expect(AmazonService).toHaveBeenCalled()
    expect(AmazonService).toHaveBeenCalledWith(isbn)
    expect(value).toEqual({ bookname: 'Dota2', cover: '58160388@gmail.com', isbn:'123456789abcd'})
    expect(value).toHaveProperty('bookname')
    expect(value).toHaveProperty('cover')
    expect(value).toHaveProperty('isbn')
    expect(value.bookname).toBe("Dota2")
    expect(value.cover).toBe("58160388@gmail.com")
    expect(value.isbn).toBe('123456789abcd')
    expect(value.isbn).toHaveLength(13)

})