import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QueryQuotation from "./src/components/QueryQuotation";
import QuotationItems from "./src/components/QueryQuotation/QuotationItems"

function numberFormat(number) {
    if (number <= 9) {
        return "0" + number;
    } else {
        return number;
    }
}

function apiURL(days) {
    const date = new Date();
    const endRange = `${date.getFullYear()}-${numberFormat(date.getMonth() + 1)}-${numberFormat(date.getDate())}`;
    date.setDate(date.getDate() - days);
    const startRange = `${date.getFullYear()}-${numberFormat(date.getMonth() + 1)}-${numberFormat(date.getDate())}`;
    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startRange}&end=${endRange}`;
};

async function getDataToList(url){
        const response = await fetch(url); 
        const apiData = await response.json();
        const bpi = apiData.bpi;
        const dataList = Object.keys(bpi).map(key => {
            return {
                date: key.split("-").reverse().join("/"),
                price: bpi[key], 
            }
        });
        const finalList = dataList.reverse();
        return finalList;
}

async function getDataToGraphic(url){
        const response = await fetch(url);
        const apiData = await response.json();
        const bpi = apiData.bpi;
        const graphicList = Object.keys(bpi).map(key => bpi[key]);
        return graphicList;
}

export default function App() {
    const [quotationList, setQuotationList] = useState([]);
    const [graphic, setGraphic] = useState([0]);
    const [days, setDays] = useState(7);
    const [updateData, setUpdateData] = useState(true);

    function updateDays(number){
        setDays(number);
        setUpdateData(true);
    }

    useEffect(()=>{
        getDataToList(apiURL(days)).then(finalList => {
            setQuotationList(finalList);
        })
        getDataToGraphic(apiURL(days)).then(graphicList => {
            setGraphic(graphicList);
        })

        if(updateData){
            return setUpdateData(false);
        }
    }, [updateData])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#FEAF00"} barStyle="dark-content" />
            <CurrentPrice currentPrice={graphic[graphic.length-1]} />
            <HistoryGraphic graphic={graphic} />
            <QueryQuotation updateDays={updateDays} />
            <QuotationItems quotationList={quotationList} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
});
