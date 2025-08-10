
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      <div className="flex items-start justify-between max-md:flex-col max-md:gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#454545] mb-4">Filter by</h3>
          
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-4 gap-8">
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
                      className="border-gray-300 h-4 w-4 rounded-sm shrink-0"
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
            {/* <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder1" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder1" className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder2" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder2" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder3" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder3" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder4" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder4" className="text-sm text-gray-600">
                    Duis aliquet felis
                  </label>
                </div>
              </div>
            </div> */}

            {/* <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder5" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder5" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder6" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder6" className="text-sm text-gray-600">
                    Duis aliquet felis
                  </label>
                </div>
              </div>
            </div> */}

            {/* <div>
              <h4 className="text-sm font-medium text-[#454545] mb-3">Something</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder7" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder7" className="text-sm text-gray-600">
                    Lorem dolor sit amet ipsum
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="placeholder8" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                  <label htmlFor="placeholder8" className="text-sm text-gray-600">
                    Ut facilisis pretium purus
                  </label>
                </div>
              </div>
            </div> */}
          </div>

          {/* Mobile Accordion Layout */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sizes" className="border-none">
                <AccordionTrigger className="text-sm font-medium text-[#454545] py-2 hover:no-underline">
                  Sizes
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2">
                    {availableSizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => handleSizeToggle(size)}
                          className="border-gray-300 h-4 w-4 rounded-sm shrink-0"
                        />
                        <label 
                          htmlFor={`mobile-${size}`} 
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          {size} mm
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value="category1" className="border-none">
                <AccordionTrigger className="text-sm font-medium text-[#454545] py-2 hover:no-underline">
                  Something
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder1" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder1" className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder2" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder2" className="text-sm text-gray-600">
                        Ut facilisis pretium purus
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder3" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder3" className="text-sm text-gray-600">
                        Ut facilisis pretium purus
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder4" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder4" className="text-sm text-gray-600">
                        Duis aliquet felis
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem> */}

              {/* <AccordionItem value="category2" className="border-none">
                <AccordionTrigger className="text-sm font-medium text-[#454545] py-2 hover:no-underline">
                  Something
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder5" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder5" className="text-sm text-gray-600">
                        Ut facilisis pretium purus
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder6" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder6" className="text-sm text-gray-600">
                        Duis aliquet felis
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem> */}

              {/* <AccordionItem value="category3" className="border-none">
                <AccordionTrigger className="text-sm font-medium text-[#454545] py-2 hover:no-underline">
                  Something
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder7" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder7" className="text-sm text-gray-600">
                        Lorem dolor sit amet ipsum
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-placeholder8" className="border-gray-300 h-4 w-4 rounded-sm shrink-0" />
                      <label htmlFor="mobile-placeholder8" className="text-sm text-gray-600">
                        Ut facilisis pretium purus
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 max-md:ml-0 ml-8 max-md:w-full max-md:justify-end">
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
