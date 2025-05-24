import React, { useState, memo, useEffect } from "react";

const AddOnCounter = memo(
  ({
    type,
    itemName,
    rateInfo,
    uom,
    minQuantity = 1,
    onAdd,
    onRemove,
    extraData,
    disableAdd,
    size,
    isSizeAndDimension,
    dimensions,
    setDimensionPrice,
  }) => {
    const [quantity, setQuantity] = useState(0);
    const [showCounter, setShowCounter] = useState(false);
    const [userDimensions, setUserDimensions] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const handleAdd = () => {
      setShowCounter(true);
      setQuantity(minQuantity);
      onAdd();
    };

    const handleIncrease = () => {
      setQuantity((prev) => prev + 1);
      onAdd();
    };

    const handleDecrease = () => {
      if (quantity > minQuantity) {
        setQuantity((prev) => prev - 1);
        onRemove();
      } else {
        setShowCounter(false);
        setQuantity(0);
        onRemove();
      }
    };

    // const uniqueDimensions = {};
    // if (isSizeAndDimension && dimensions) {
    //   Object.keys(dimensions).forEach((key) => {
    //     if (
    //       key.includes("Height") ||
    //       key.includes("Width") ||
    //       key.includes("Length")
    //     ) {
    //       const dimensionType = key.match(/^(Width|Height|Length)/)?.[0]; // More precise extraction
    //       if (dimensionType) {
    //         uniqueDimensions[dimensionType] = dimensions[key];
    //       }
    //     }
    //   });
    // }

    // const handleDimensionChange = (dimension, value) => {
    //   const updatedDimensions = { ...userDimensions, [dimension]: value };
    //   setUserDimensions(updatedDimensions);
    //   const height = updatedDimensions.Height || uniqueDimensions.Height || 0;
    //   const width = updatedDimensions.Width || uniqueDimensions.Width || 0;
    //   const length = updatedDimensions.Length || uniqueDimensions.Length || 0;
    //   const price = dimensions?.Price || 0;

    //   const total = height * width * length * price;
    //   setTotalPrice(total);
    // };

    // const hasInputFields =
    //   isSizeAndDimension && Object.keys(uniqueDimensions).length > 0;
    //   console.log("uniqueDimensions:",dimensions);

    const [allDimensions, setAllDimensions] = useState({});

    useEffect(() => {
      if (isSizeAndDimension && dimensions) {
        // Merge new dimension into existing ones
        setAllDimensions((prev) => {
          const newDimensions = { ...prev };
          Object.keys(dimensions).forEach((key) => {
            if (
              key.includes("Height") ||
              key.includes("Width") ||
              key.includes("Length")
            ) {
              const dimensionType = key.split("(")[0];
              newDimensions[dimensionType] = dimensions[key];
            }
          });
          return newDimensions;
        });
      }
    }, [dimensions, isSizeAndDimension]);
    const hasInputFields =
      isSizeAndDimension && Object.keys(allDimensions).length > 0;

    const handleDimensionChange = (dimension, value) => {
      const updatedDimensions = { ...userDimensions, [dimension]: value };
      setUserDimensions(updatedDimensions);

      // Get dimensions - treat missing dimensions as 1 for calculation
      const height = parseFloat(
        updatedDimensions.Height || allDimensions.Height || 1
      );
      const width = parseFloat(
        updatedDimensions.Width || allDimensions.Width || 1
      );
      const length = parseFloat(
        updatedDimensions.Length || allDimensions.Length || 1
      );

      // Calculate price per unit (using first available dimension)
      const baseDimension = parseFloat(
        allDimensions.Height || allDimensions.Width || allDimensions.Length || 1
      );
      const pricePerUnit = parseFloat(dimensions?.Price || 0) / baseDimension;

      // Total Price = H × W × L × Price per Unit
      const total = height * width * length * pricePerUnit;
      setTotalPrice(total);
      // Update parent component's dimension price
      if (setDimensionPrice) {
        setDimensionPrice(total);
      }
    };
    return (
      <div className="w-full flex items-start justify-between flex-col bg-white">
        <div className="w-full flex items-start justify-between py-3">
          <div className="flex flex-col w-full">
            <span className="flex items-center justify-between w-full pr-4">
              {itemName && (
                <div className="flex items-start justify-start flex-col">
                  <h3 className="text-normal font-normal text-gray-800 text-primary break-words">
                    {itemName}
                  </h3>
                  {size && (
                    <p className="text-textGray text-esm">
                      {size} {uom}
                    </p>
                  )}
                </div>
              )}

              {!hasInputFields && (
                <p
                  className={
                    type === "Package"
                      ? "text-sm font-medium text-primary"
                      : "text-sm font-medium text-gray-500"
                  }
                >
                  {type === "Package"
                    ? `${uom} / Rs ${rateInfo}`
                    : `${rateInfo}/${uom}`}
                </p>
              )}
            </span>

            {hasInputFields && (
              <div className="mt-2">
                <div className="flex flex-row items-center gap-4 whitespace-nowrap">
                  {allDimensions.Width !== undefined && (
                    <input
                      type="number"
                      placeholder="Width (ft)"
                      value={userDimensions.Width || ""}
                      onChange={(e) =>
                        handleDimensionChange("Width", e.target.value)
                      }
                      className="border p-1 rounded w-12 text-sm outline-none border-2 border-hoverYellow"
                    />
                  )}

                  {allDimensions.Height !== undefined && (
                    <input
                      type="number"
                      placeholder="Height (ft)"
                      value={userDimensions.Height || ""}
                      onChange={(e) =>
                        handleDimensionChange("Height", e.target.value)
                      }
                      className="border p-1 rounded w-12 text-sm outline-none border-2 border-hoverYellow"
                    />
                  )}

                  {allDimensions.Length !== undefined && (
                    <input
                      type="number"
                      placeholder="Length (th)"
                      value={userDimensions.Length || ""}
                      onChange={(e) =>
                        handleDimensionChange("Length", e.target.value)
                      }
                      className="border p-1 rounded w-12 text-sm outline-none border-2 border-hoverYellow"
                    />
                  )}

                  <p className="text-sm font-medium text-primary">
                    {`sq${Object.keys(allDimensions).length}`}
                  </p>
                </div>
              </div>
            )}
          </div>

          {!hasInputFields && (
            <>
              {!showCounter ? (
                <button
                  className="bg-textYellow text-primary font-medium py-2 px-4 rounded hover:bg-yellow-500 transition duration-200"
                  onClick={handleAdd}
                >
                  Add
                </button>
              ) : (
                <div className="flex items-center">
                  {type === "package" ? (
                    <span className="text-lg font-medium">
                      {extraData.packageDetails}
                    </span>
                  ) : (
                    <>
                      <button
                        className="bg-textYellow text-primary font-bold py-1 px-3 rounded hover:bg-[#CBAB00] transition duration-200"
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                      <span className="mx-4 text-lg font-medium">
                        {quantity}
                      </span>
                      <button
                        className="bg-textYellow text-primary font-bold py-1 px-3 rounded hover:bg-[#CBAB00] transition duration-200"
                        onClick={handleIncrease}
                        disabled={disableAdd}
                      >
                        +
                      </button>
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

export default AddOnCounter;
