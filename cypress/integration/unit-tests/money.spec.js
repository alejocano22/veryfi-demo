import { getNetAmount } from '../../../src/components/utils/index';

describe('Money Unit Tests', function () {
  before(() => {
    expect(getNetAmount, 'getNetAmount').to.be.a('function');
  });

  context('getNetAmount', function () {
    it('Should calculate net amount', function () {
      expect(getNetAmount([0], [0])).to.eql([0]);
      expect(getNetAmount([], [])).to.eql([]);
      expect(getNetAmount([1, 2, 3], [1, 2, 3])).to.eql([0, 0, 0]);
      expect(getNetAmount([3, 2, 1], [1, 2, 3])).to.eql([2, 0, -2]);
      expect(getNetAmount([10, 20, 30, 40, 50], [1, 2, 3, 4, 5])).to.eql([
        9, 18, 27, 36, 45,
      ]);
    });
  });
});
