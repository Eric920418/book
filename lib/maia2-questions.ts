// MAIA-2 (Multidimensional Assessment of Interoceptive Awareness - Version 2)
// 中文版量表題目

export type DimensionKey =
  | "noticing"
  | "notDistracting"
  | "notWorrying"
  | "attentionRegulation"
  | "emotionalAwareness"
  | "selfRegulation"
  | "bodyListening"
  | "trusting";

export interface Dimension {
  key: DimensionKey;
  name: string;
  description: string;
  questionIds: number[];
}

export interface Question {
  id: number;
  text: string;
  dimension: DimensionKey;
}

// 8個面向定義
export const dimensions: Dimension[] = [
  {
    key: "noticing",
    name: "注意",
    description: "察覺呼吸、緊繃或舒適等身體變化",
    questionIds: [1, 2, 3, 4],
  },
  {
    key: "notDistracting",
    name: "不分心",
    description: "能面對不適，不逃避或壓抑",
    questionIds: [5, 6, 7, 8, 9, 10],
  },
  {
    key: "notWorrying",
    name: "不擔心",
    description: "面對不適時不陷入焦慮或恐懼",
    questionIds: [11, 12, 13, 14, 15],
  },
  {
    key: "attentionRegulation",
    name: "注意調節",
    description: "能主動把注意力帶回身體，如呼吸錨定",
    questionIds: [16, 17, 18, 19, 20, 21, 22],
  },
  {
    key: "emotionalAwareness",
    name: "情緒覺察",
    description: "感受情緒如何在身體中顯現",
    questionIds: [23, 24, 25, 26, 27],
  },
  {
    key: "selfRegulation",
    name: "自我調節",
    description: "透過身體感受調節情緒與喚起",
    questionIds: [28, 29, 30, 31, 32],
  },
  {
    key: "bodyListening",
    name: "身體聆聽",
    description: "細膩傾聽身體訊息，從中獲得方向感",
    questionIds: [33, 34, 35],
  },
  {
    key: "trusting",
    name: "身體信任",
    description: "感到身體是安全、可靠的地方",
    questionIds: [36, 37],
  },
];

// MAIA-2 標準中文版題目（37題）
export const questions: Question[] = [
  // 注意 (Noticing) - 1-4
  {
    id: 1,
    text: "當我緊張時，我會注意到身體的緊繃感。",
    dimension: "noticing",
  },
  {
    id: 2,
    text: "我會注意到自己的呼吸變化。",
    dimension: "noticing",
  },
  {
    id: 3,
    text: "我會注意到自己的心跳。",
    dimension: "noticing",
  },
  {
    id: 4,
    text: "我會注意到身體舒適或不舒適的感覺。",
    dimension: "noticing",
  },

  // 不分心 (Not-Distracting) - 5-10
  {
    id: 5,
    text: "當我感到身體疼痛或不舒服時，我會試圖分散注意力，不去想它。",
    dimension: "notDistracting",
  },
  {
    id: 6,
    text: "當我感到身體不適時，我會試圖忽略它。",
    dimension: "notDistracting",
  },
  {
    id: 7,
    text: "當我感到疼痛時，我會試圖不去注意它。",
    dimension: "notDistracting",
  },
  {
    id: 8,
    text: "如果我感到不舒服，我會盡量不去感覺它。",
    dimension: "notDistracting",
  },
  {
    id: 9,
    text: "當我覺得身體某處有壓力時，我會試圖無視它。",
    dimension: "notDistracting",
  },
  {
    id: 10,
    text: "當我感到身體不舒服時，我會做其他事情來分散注意力。",
    dimension: "notDistracting",
  },

  // 不擔心 (Not-Worrying) - 11-15
  {
    id: 11,
    text: "當我感到身體有些緊繃或不適時，我會開始擔心是不是哪裡出了問題。",
    dimension: "notWorrying",
  },
  {
    id: 12,
    text: "我會因為身體的某個感覺而開始擔心。",
    dimension: "notWorrying",
  },
  {
    id: 13,
    text: "當我察覺到身體的感覺時，我會變得焦慮。",
    dimension: "notWorrying",
  },
  {
    id: 14,
    text: "當我覺得身體某處有緊繃感時，我會開始煩躁。",
    dimension: "notWorrying",
  },
  {
    id: 15,
    text: "我會因為身體的不適而感到害怕。",
    dimension: "notWorrying",
  },

  // 注意調節 (Attention Regulation) - 16-22
  {
    id: 16,
    text: "我能把注意力從雜念拉回到身體的感覺上。",
    dimension: "attentionRegulation",
  },
  {
    id: 17,
    text: "我能維持對身體感覺的注意力。",
    dimension: "attentionRegulation",
  },
  {
    id: 18,
    text: "當我分心時，我能把注意力重新帶回到身體。",
    dimension: "attentionRegulation",
  },
  {
    id: 19,
    text: "我能把注意力集中在呼吸上。",
    dimension: "attentionRegulation",
  },
  {
    id: 20,
    text: "我能專注於身體的內在感覺。",
    dimension: "attentionRegulation",
  },
  {
    id: 21,
    text: "當需要時，我能將注意力轉移到身體的某個特定部位。",
    dimension: "attentionRegulation",
  },
  {
    id: 22,
    text: "我能持續感知身體的整體狀態。",
    dimension: "attentionRegulation",
  },

  // 情緒覺察 (Emotional Awareness) - 23-27
  {
    id: 23,
    text: "我會注意到自己的情緒如何影響身體的感覺。",
    dimension: "emotionalAwareness",
  },
  {
    id: 24,
    text: "我會注意到身體的感覺改變了我的情緒狀態。",
    dimension: "emotionalAwareness",
  },
  {
    id: 25,
    text: "當我生氣時，我能感覺到身體的變化。",
    dimension: "emotionalAwareness",
  },
  {
    id: 26,
    text: "我能察覺到情緒在身體中的位置。",
    dimension: "emotionalAwareness",
  },
  {
    id: 27,
    text: "我會注意到身體的感覺影響了我的思緒。",
    dimension: "emotionalAwareness",
  },

  // 自我調節 (Self-Regulation) - 28-32
  {
    id: 28,
    text: "當我心煩意亂時，我能夠透過關注身體來讓自己平靜下來。",
    dimension: "selfRegulation",
  },
  {
    id: 29,
    text: "我能利用呼吸來減輕緊張感。",
    dimension: "selfRegulation",
  },
  {
    id: 30,
    text: "當我焦慮時，我能藉由感受身體來穩定自己。",
    dimension: "selfRegulation",
  },
  {
    id: 31,
    text: "當我情緒激動時，我能透過覺察身體來調節情緒。",
    dimension: "selfRegulation",
  },
  {
    id: 32,
    text: "我能夠透過關注身體來減輕不愉快的感受。",
    dimension: "selfRegulation",
  },

  // 身體聆聽 (Body Listening) - 33-35
  {
    id: 33,
    text: "我會傾聽身體給我的訊息，了解該怎麼做。",
    dimension: "bodyListening",
  },
  {
    id: 34,
    text: "我會信任身體的感覺，作為重要的決策依據。",
    dimension: "bodyListening",
  },
  {
    id: 35,
    text: "我能從身體的感覺得知我需要什麼。",
    dimension: "bodyListening",
  },

  // 身體信任 (Trusting) - 36-37
  {
    id: 36,
    text: "我的身體是一個安全的地方。",
    dimension: "trusting",
  },
  {
    id: 37,
    text: "我信任自己的身體感覺。",
    dimension: "trusting",
  },
];

// MAIA-2 反向計分題目清單
// 根據標準 MAIA-2 量表規格
const REVERSE_SCORED_ITEMS = [5, 6, 7, 8, 9, 10, 11, 12, 15];

// 計算單一題目的實際分數（處理反向計分）
function scoreItem(questionId: number, rawScore: number): number {
  if (REVERSE_SCORED_ITEMS.includes(questionId)) {
    return 5 - rawScore; // 反向計分公式
  }
  return rawScore; // 正向計分題目
}

// 計算每個面向的平均分
export function calculateDimensionScores(answers: Record<number, number>): Record<DimensionKey, number> {
  const scores: Record<DimensionKey, number> = {} as Record<DimensionKey, number>;

  dimensions.forEach((dimension) => {
    // 先取得原始分數，再套用反向計分邏輯，最後計算平均
    const questionScores = dimension.questionIds.map((id) => {
      const rawScore = answers[id] || 0;
      return scoreItem(id, rawScore);
    });
    const average = questionScores.reduce((sum, score) => sum + score, 0) / questionScores.length;
    scores[dimension.key] = Number(average.toFixed(2));
  });

  return scores;
}

// 獲取面向名稱（中文）
export function getDimensionName(key: DimensionKey): string {
  return dimensions.find((d) => d.key === key)?.name || key;
}
