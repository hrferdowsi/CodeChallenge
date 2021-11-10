declare module "*.png" {
    const value: any;
    export default value;
}

type Accommodation = {
    "id": string,
    "property": {
        "propertyId": string,
        "title": string,
        "address": string[],
        "previewImage": {
            "url": string,
            "caption": string,
            "imageType": string
        },
        "rating": {
            "ratingValue": number,
            "ratingType": RatingType
        }
    },
    "offer": {
        "promotion": {
            "title": PromotionTitle,
            "type": PromotionType
        },
        "name": string,
        "displayPrice": {
            "amount": number,
            "currency": string
        },
        "savings": {
            "amount": number,
            "currency": string
        },
        "cancellationOption": {
            "cancellationType": CancellationType
        }
    }
}

type RatingType = "star" | "self";
type PromotionType = "CAMPAIGN" | "MEMBER";
type CancellationType = "FREE_CANCELLATION" | "NOT_REFUNDABLE";
type PromotionTitle = "Exclusive Deal" | "Bonus Points" | "Red Hot";
type searchOrder = "hl" | "lh";