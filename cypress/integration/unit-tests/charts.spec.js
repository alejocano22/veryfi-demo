import { toBarChartData } from '../../../src/components/utils/index';
import {
  categoriesLabelsMockData,
  categoriesValuesMockData,
  projectsLabelsMockData,
  projectsValuesMockData,
  tagsLabelsMockData,
  tagsValuesMockData,
} from '../../../src/utils/index';

describe('Charts Unit Tests', function () {
  before(() => {
    expect(toBarChartData, 'toBarChartData').to.be.a('function');
  });

  context('toBarChartData', function () {
    it('Should return categories mock data', function () {
      expect(toBarChartData([], 'category')).to.eql({
        labels: categoriesLabelsMockData,
        values: categoriesValuesMockData,
        mock: true,
      });
    });

    it('Should return tags mock data', function () {
      expect(toBarChartData([], 'tags')).to.eql({
        labels: tagsLabelsMockData,
        values: tagsValuesMockData,
        mock: true,
      });
    });

    it('Should return projects mock data', function () {
      expect(toBarChartData([], 'projects')).to.eql({
        labels: projectsLabelsMockData,
        values: projectsValuesMockData,
        mock: true,
      });
    });

    it('Should return tags sorted', function () {
      expect(
        toBarChartData(
          [
            { name: '#tag2', spent: 2 },
            { name: '#tag4', spent: 4 },
            { name: '#tag3', spent: 3 },
            { name: '#tag1', spent: 1 },
            { name: '#tag5', spent: 5 },
          ],
          'tags'
        )
      ).to.eql({
        labels: ['#tag5', '#tag4', '#tag3', '#tag2', '#tag1'],
        values: [5, 4, 3, 2, 1],
        mock: false,
      });
    });

    it('Should return tags sorted and top ten', function () {
      expect(
        toBarChartData(
          [
            { name: '#tag2', spent: 2 },
            { name: '#tag4', spent: 4 },
            { name: '#tag3', spent: 3 },
            { name: '#tag1', spent: 1 },
            { name: '#tag10', spent: 10 },
            { name: '#tag11', spent: 11 },
            { name: '#tag5', spent: 5 },
            { name: '#tag6', spent: 6 },
            { name: '#tag12', spent: 12 },
            { name: '#tag13', spent: 13 },
            { name: '#tag7', spent: 7 },
            { name: '#tag8', spent: 8 },
            { name: '#tag14', spent: 14 },
            { name: '#tag15', spent: 15 },
            { name: '#tag9', spent: 9 },
          ],
          'tags'
        )
      ).to.eql({
        labels: [
          '#tag15',
          '#tag14',
          '#tag13',
          '#tag12',
          '#tag11',
          '#tag10',
          '#tag9',
          '#tag8',
          '#tag7',
          '#tag6',
        ],
        values: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6],
        mock: false,
      });
    });
  });
});
