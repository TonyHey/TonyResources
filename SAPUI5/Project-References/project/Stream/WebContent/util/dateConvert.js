jQuery.sap.declare("Stream.util.dateConvert");

Stream.util.dateConvert = {
        /**
         * Convert [Date] to String[yyyymmdd]
         *
         * @param {Date} date 
         * @return {String} "yyyymmdd"
         */
        dateToString : function(date) {
            var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : "" + (date.getMonth() + 1);
            
            return date.getFullYear() + month + date.getDate();
        },

        /**
         * Get afterDate(12 Months/8 Weeks/7 Days ago) & Convert to String[yyyymmdd]
         *
         * @param {String} dimen 
         * @return {String} "yyyymmdd"
         */
        afterDateToString: function(dimen) {
            var temp,
                result,
                now = new Date();

            switch (dimen) {
                case "Month":
                    temp = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : "" + (now.getMonth() + 1);
                    result = (parseInt(this.dateToString(now).slice(0, 4)) - 1) + temp + now.getDate();
                    break;
                case "Week":
                    temp = new Date((now/1000 - 86400*7*8)*1000);
                    result = this.dateToString(temp);
                    break;
                case "Day":
                    temp = new Date((now/1000 - 86400*7)*1000);
                    result = this.dateToString(temp);
                    break;
                default:
                    console.log("Error! No dimensions of " + dimen + "! [afterDateToString()]");
            }
            
            return result;
        }
};