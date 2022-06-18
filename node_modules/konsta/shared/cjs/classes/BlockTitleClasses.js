"use strict";

exports.__esModule = true;
exports.BlockTitleClasses = void 0;

const BlockTitleClasses = props => {
  const {
    withBlock
  } = props;
  return {
    base: {
      common: `pl-4-safe pr-4-safe mt-8 flex justify-between items-center ${withBlock ? '-mb-6' : 'mb-2'}`,
      ios: `font-semibold`,
      material: `font-medium`
    }
  };
};

exports.BlockTitleClasses = BlockTitleClasses;