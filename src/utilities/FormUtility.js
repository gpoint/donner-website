export default {

    formatAmount: (stringValue) => {
        // Remove non-numeric characters from input value
        const value = parseFloat(`${stringValue}`.replace(/[^\d.]/g, ''));

        let amount;

        if (value) {
            
            amount = Math.abs(value);

            if (amount > 100000000000) {
            
                amount = 100000000000;
            }
            
            if(amount < 1000) {
                
                amount = 1000;
            }
            
        } else {
            
            return '';
            
        }

        // Format the number with commas
        const formattedAmount = amount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // return the formatted value
        return formattedAmount;

    }
};