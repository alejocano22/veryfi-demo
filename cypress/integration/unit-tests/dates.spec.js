import { createDate } from '../../../src/components/utils/index';

describe('Dates Unit Tests', function () {
  before(() => {
    expect(createDate, 'createDate').to.be.a('function');
  });

  it('Should return a date', function () {
    expect(createDate(0, 0, 0)).to.be.a('Date');
  });

  context('createDate', function () {
    it('Should create a date', function () {
      const date = new Date('01-01-2022');
      expect(createDate(0, 0, 0, date)).to.eql(date);
    });

    it('Should add days', function () {
      const date1 = new Date('01-01-2022');
      const response1 = new Date('01-02-2022');
      const date2 = new Date('01-01-2022');
      const response2 = new Date('01-11-2022');
      const date3 = new Date('01-01-2022');
      const response3 = new Date('01-16-2022');
      expect(createDate(1, 0, 0, date1)).to.eql(response1);
      expect(createDate(10, 0, 0, date2)).to.eql(response2);
      expect(createDate(15, 0, 0, date3)).to.eql(response3);
    });

    it('Should add months', function () {
      const date1 = new Date('01-01-2022');
      const response1 = new Date('02-01-2022');
      const date2 = new Date('01-01-2022');
      const response2 = new Date('06-01-2022');
      const date3 = new Date('01-01-2022');
      const response3 = new Date('01-01-2023');
      expect(createDate(0, 1, 0, date1)).to.eql(response1);
      expect(createDate(0, 5, 0, date2)).to.eql(response2);
      expect(createDate(0, 12, 0, date3)).to.eql(response3);
    });

    it('Should add or subtract years', function () {
      const date1 = new Date('01-01-2022');
      const response1 = new Date('01-01-2023');
      const date2 = new Date('01-01-2022');
      const response2 = new Date('01-01-2027');
      const date3 = new Date('01-01-2022');
      const response3 = new Date('01-01-2021');
      expect(createDate(0, 0, 1, date1)).to.eql(response1);
      expect(createDate(0, 0, 5, date2)).to.eql(response2);
      expect(createDate(0, 0, -1, date3)).to.eql(response3);
    });

    it('Should return the corresponding date', function () {
      const date1 = new Date('01-01-2022');
      const response1 = new Date('03-02-2025');
      const date2 = new Date('01-01-2022');
      const response2 = new Date('03-04-2023');
      const date3 = new Date('12-31-2022');
      const response3 = new Date('6-21-2012');
      const date4 = new Date('1-1-1999');
      const response4 = new Date('1-1-2021');
      expect(createDate(1, 2, 3, date1)).to.eql(response1);
      expect(createDate(3, 2, 1, date2)).to.eql(response2);
      expect(createDate(-10, -6, -10, date3)).to.eql(response3);
      expect(createDate(0, 0, 22, date4)).to.eql(response4);
    });
  });
});
