function filteredByBrand(data, brand){
    const lowerBrand = brand.toLowerCase()

    const dataFilteredByBrand = data.filter(item => {
        const lowerBrandData = item.brand.toLowerCase()

        if (lowerBrand === lowerBrandData) {
            return item
        }
    })

    return dataFilteredByBrand;
}


export default filteredByBrand;