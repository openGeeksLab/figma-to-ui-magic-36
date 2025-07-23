
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  availableSizes: string[];
  selectedSizes: string[];
  onSizeChange: (sizes: string[]) => void;
  onApply: () => void;
  onCancel: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  availableSizes,
  selectedSizes,
  onSizeChange,
  onApply,
  onCancel
}) => {
  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSizeChange(selectedSizes.filter(s => s !== size));
    } else {
      onSizeChange([...selectedSizes, size]);
    }
  };

  return (
    <div className="bg-gray-50 rounded-[16px] border border-gray-200 p-6 mb-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#454545] mb-4">Filter by</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sizes Column */}
            <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Sizes</h4>
              <div className="space-y-2">
                {availableSizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={() => handleSizeToggle(size)}
                      className="border-gray-300"
                    />
                    <label 
                      htmlFor={size} 
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {size} mm
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder columns for future filters */}
            <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder1" className="border-gray-300" />
                  <label htmlFor="placeholder1" className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder2" className="border-gray-300" />
                  <label htmlFor="placeholder2" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder3" className="border-gray-300" />
                  <label htmlFor="placeholder3" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder4" className="border-gray-300" />
                  <label htmlFor="placeholder4" className="text-sm text-gray-600">
                    Duis aliquet felis
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder5" className="border-gray-300" />
                  <label htmlFor="placeholder5" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder6" className="border-gray-300" />
                  <label htmlFor="placeholder6" className="text-sm text-gray-600">
                    Duis aliquet felis
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder7" className="border-gray-300" />
                  <label htmlFor="placeholder7" className="text-sm text-gray-600">
                    Lorem dolor sit amet ipsum
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder8" className="border-gray-300" />
                  <label htmlFor="placeholder8" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 ml-8">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="px-6 py-2 rounded-[28px] border-gray-300 text-[#454545] hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button 
            onClick={onApply}
            className="px-6 py-2 rounded-[28px] bg-[#DCB481] text-white hover:bg-[#C9A16E]"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
