---
id: 2026-08-23-haenam-solaseado-national-ai-datacenter
title: "분산에너지법과 재생에너지 직결의 첫 시험대: 해남 솔라시도 3.2GW '국가 AI 컴퓨팅센터' 착공과 전력 계통 분산화 전략"
date: 2026-08-23
time: "12:00"
category: Policy & Infra
status: published
summary: "전라남도 해남 솔라시도 기업도시에 총사업비 2조 5,000억 원 규모의 '국가 AI 컴퓨팅센터'가 2026년 8월 3일 공식 착공했습니다. 2028년 고성능 GPU 1.5만 장, 2030년 5만 장 규모로 확장되는 국내 최대 공용 AI 인프라의 건축·전력 설계와, 수도권 전력망 포화를 우회하여 호남권 재생에너지(RE100)와 직결하는 'Load-to-Power' 분산 인프라 전략, 국산 NPU 실증 로드맵을 심층 분석합니다."
labels:
  - 정책인프라
  - 국가AI컴퓨팅센터
  - 솔라시도
  - 삼성SDS
  - 분산에너지법
  - RE100
  - 데이터센터
  - GPU인프라
  - 전력망
  - NPU
updated: "2026-08-23 12:00"
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; line-height: 1.85; color: #1E293B; max-width: 100%; word-break: keep-all; font-size: 16px;">

  <!-- 서론 인트로 카드 -->
  <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color: #FFFFFF; padding: 34px 30px; border-radius: 12px; margin-bottom: 36px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15);">
    <div style="display: inline-block; background-color: #6366F1; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;">NATIONAL AI INFRASTRUCTURE FOCUS</div>
    <h1 style="font-size: 26px; font-weight: 800; line-height: 1.4; margin: 0 0 16px 0; color: #F8FAFC;">분산에너지법과 재생에너지 직결의 첫 시험대: 해남 솔라시도 3.2GW '국가 AI 컴퓨팅센터' 착공 분석</h1>
    <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1; margin: 0;">수도권 송전망 건설 지연(그리드락)을 돌파하기 위해 대한민국 정부와 민간 컨소시엄이 '발전원 직결형 데이터센터' 구축에 돌입했습니다. 해남 솔라시도 국가 AI 컴퓨팅센터의 공학적 설계와 GPU/NPU 인프라 청사진을 분석합니다.</p>
  </div>

  <!-- 출처 및 공식 레퍼런스 박스 -->
  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #6366F1; border-radius: 8px; padding: 20px 24px; margin-bottom: 36px; font-size: 14px; color: #475569;">
    <strong>🏛️ 주무 부처 및 공식 보도:</strong> 과학기술정보통신부·전라남도, <em>국가 AI 컴퓨팅센터 착공식 공식 보도자료</em> (2026.08.03, 해남 솔라시도)<br>
    <strong>🔗 주요 언론 보도 1:</strong> <a href="https://www.seoulfn.com/news/articleView.html?idxno=634785" target="_blank" rel="noopener noreferrer" style="color: #6366F1; font-weight: 600; text-decoration: underline;">[서울파이낸스] 해남 솔라시도 국가AI컴퓨팅센터 착공…'AI 3대 강국' 핵심 인프라 시동</a><br>
    <strong>📰 주요 언론 보도 2:</strong> <a href="https://n.news.naver.com/mnews/article/138/0002236370" target="_blank" rel="noopener noreferrer" style="color: #6366F1; font-weight: 600; text-decoration: underline;">[디지털데일리] 2.5조 ‘국가 AI컴퓨팅센터’ 첫삽…2028년 구축 목표 국내 AI 연산지원 출격</a><br>
    <strong>📰 주요 언론 보도 3:</strong> <a href="https://n.news.naver.com/mnews/article/092/0002432847" target="_blank" rel="noopener noreferrer" style="color: #6366F1; font-weight: 600; text-decoration: underline;">[지디넷코리아] [현장] "AI 공급망 핵심 국가로"…정부·민간 협력 '국가AI컴퓨팅센터' 착공</a><br>
    <strong>📰 주요 언론 보도 4:</strong> <a href="https://n.news.naver.com/mnews/article/092/0002432857" target="_blank" rel="noopener noreferrer" style="color: #6366F1; font-weight: 600; text-decoration: underline;">[지디넷코리아] "국가AI컴퓨팅센터 GPU, B200 확정 아냐…최신 AI 반도체 도입"</a><br>
    <strong>💻 GPU 서비스 공급사:</strong> 삼성SDS, <em>국가 AI GPU 컴퓨팅 서비스 개시... 최신 B300 및 H100 공급</em> (2026.08.11)<br>
    <strong>⚖️ 근거 법령:</strong> <a href="https://www.law.go.kr" target="_blank" rel="noopener noreferrer" style="color: #6366F1; text-decoration: underline;">분산에너지 활성화 특별법</a> 제33조 (분산에너지 특화지역 내 직접 전력거래 특례)
  </div>

  <p>2026년 8월 3일, 전남 해남군 산이면 솔라시도 기업도시에서 대한민국 AI 연구와 첨단 산업의 핵심 인프라가 될 <strong>'국가 AI 컴퓨팅센터' 착공식</strong>이 성대하게 개최되었습니다. 총사업비 약 2조 5,000억 원이 투입되는 이 센터는 부지 면적 4만 8,996㎡(연면적 1만 6,978㎡, 지상 2층) 규모로 건설되며 2028년 완공을 목표로 하고 있습니다.</p>

  <p>이 사업은 삼성SDS가 주관하는 민관 합작 특수목적법인(SPC)인 <strong>'한국AI컴퓨팅센터(KOACC)'</strong>(네이버클라우드, 삼성물산, 카카오, KT 등 참여)가 건설 및 운영을 전담합니다. 수도권 중심의 데이터센터 과밀과 송전선로 병목을 극복하기 위해 제정된 <strong>분산에너지 활성화 특별법의 제1호 국가 프로젝트</strong>로서, 호남권 2.5GW 태양광 및 신안 해상풍력 재생에너지를 현지에서 직접 소비(Load-to-Power)하는 RE100 기반 AIDC 집적단지(최종 3.2GW)의 핵심 앵커 시설입니다.</p>

  <!-- 1장: 3단계 인프라 구축 로드맵 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🚀 1. 국가 AI 컴퓨팅센터 3단계 GPU/NPU 자원 공급 로드맵</h2>

  <p>과기정통부와 KOACC 컨소시엄은 급증하는 국내 산학연의 초거대 AI 모델 연구 및 상용화 수요를 뒷받침하기 위해 3단계에 걸친 가속기 자원 공급 로드맵을 확정했습니다:</p>

  <div style="margin: 24px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; border: 1px solid #CBD5E1;">
      <thead>
        <tr style="background-color: #0F172A; color: #FFFFFF;">
          <th style="padding: 12px 14px; border: 1px solid #334155;">구축 단계</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">목표 시점</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">가속기 확보 규모 (연산 성능)</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">주요 하드웨어 아키텍처 및 공급 구성</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">1단계 (초기 실증)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">2026년 하반기</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #2563EB;">B300 / H100 1,000장+ (민간 클라우드 임차)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">삼성SDS 컨소시엄 기반 클라우드 가상 풀 구축 및 산학연 시범 배정</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">2단계 (센터 준공)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">2028년</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">초고성능 GPU 1.5만 장 (10~15 EFLOPS)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">Blackwell 후속 Ultra 칩셋 + 국산 NPU(Rebellions, FuriosaAI) 20% 의무 할당</td>
        </tr>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">3단계 (최종 확장)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">2030년</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #6366F1;">최신 AI 가속기 5만 장+ (50 EFLOPS+)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">단일 클러스터 기준 아시아 최대 공용 인프라 완성 및 글로벌 파운데이션 모델 훈련</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>과기정통부 발표에 따르면 1단계 사업으로 2026년 8월 11일부터 삼성SDS를 통해 엔비디아 B300 및 H100 기반의 가속기 서비스를 산학연 연구진에 우선 개시했습니다. 2028년 본 센터 준공 시점에는 최신 GPU와 더불어 리벨리온(Rebellions), 퓨리오사AI(FuriosaAI) 등 국산 신경망처리장치(NPU)를 20% 이상 탑재하여 국산 AI 반도체 생태계의 실증 레퍼런스를 확보할 계획입니다.</p>

  <p>이러한 단계별 확장은 단순 외산 하드웨어 도입에 그치지 않고 국산 풀스택 AI 소프트웨어(컴파일러, 서빙 프레임워크)를 함께 검증하는 국가 기술 자립화의 핵심 시험대 역할을 수행합니다.</p>

  <!-- 2장: 분산에너지법과 Load-to-Power 메커니즘 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚡ 2. 분산에너지 활성화 특별법과 'Load-to-Power' 전력 계통 전략</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">2.1 수도권 전력 집중의 구조적 한계와 호남권 출력 제어(Curtailment) 역설</h3>
  <p>국내 데이터센터 전력 수요의 70% 이상이 수도권에 집중되어 있어 한전의 345kV/765kV 송전선로 포화와 신규 수전 거부 사태가 지속되고 있습니다. 반면 전남·호남 지역은 약 11GW에 달하는 태양광 및 풍력 발전소가 밀집해 있으나, 이를 수도권으로 보낼 북상 송전망 용량이 부족해 봄·가을철 <strong>신재생에너지 강제 출력제어(Curtailment)</strong>가 빈번하게 발생하고 있습니다.</p>

  <p>이러한 전력 계통의 공간적 불균형을 해소하기 위해 제정된 법이 바로 '분산에너지 활성화 특별법'입니다. 수도권으로 전기를 끌어오는 대신 전기가 풍부하게 생산되는 곳으로 대규모 소비처(데이터센터)를 이동시키는 패러다임 전환입니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">2.2 분산특구 직접 PPA(전력구매계약)와 한전 망 수수료 절감 메커니즘</h3>
  <p>분산에너지법 제33조에 따라 지정되는 <strong>'분산에너지 특화지역(분산특구)'</strong>에서는 발전사업자와 데이터센터가 한전의 전력망을 거치지 않고 직접 전력구매계약(Direct PPA)을 체결할 수 있습니다. 이는 송배전망 이용 요금을 절감하고, 신재생 발전소 인근에 데이터센터를 직접 배치하는 <strong>'Load-to-Power(전력 수요의 발전원 이동)'</strong> 모델을 실현합니다.</p>

  <!-- 수식 카드 1: 송전 효율 등식 -->
  <div style="background-color: #F1F5F9; border-left: 4px solid #6366F1; padding: 20px 22px; border-radius: 6px; margin: 20px 0; font-size: 15px;">
    <strong>📐 발전원 직결형 전력 전송 효율 등식:</strong><br>
    <code style="font-size: 16px; font-weight: 700; color: #0F172A;">η_delivery = (P_generation - P_line_loss) / P_generation × 100%</code><br>
    <span style="font-size: 13px; color: #475569;">
      • 호남-수도권 장거리 345kV 송전 시 선로 손실(3~5%) 및 승강압 변환 손실 발생<br>
      • 솔라시도 구내 154kV 직결 배전망 적용 시 송전 손실 0.5% 미만으로 억제 및 RE100 100% 실시간 매칭<br>
      • 한전 송전선로 건설 비용(HVDC 서해안 고속도로 수조 원) 부담 완화 및 계통 혼잡 완벽 해소
    </span>
  </div>

  <!-- 3장: 인프라 설계 사양 및 입지 공학 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🏗️ 3. 솔라시도 AIDC 클러스터 건축 및 냉각 인프라 설계</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">3.1 154kV 전용 변전소 2회선 인입 및 3.2GW 마스터플랜</h3>
  <p>해남 솔라시도 단지는 초기 40MW 수전을 시작으로 2030년까지 154kV 변전소 4개소 및 345kV 변전소를 단계별로 신설하여 최종 <strong>3.2GW 규모의 데이터센터 집적단지</strong>로 확장됩니다. 지중 송전선로 이중화와 N+2 다중 전력 경로를 확보하여 전력 신뢰도를 유지합니다.</p>

  <p>지진 및 해일 등 자연재해에 대비해 건물 기초를 해발 15m 이상으로 높이고, 독립형 마이크로그리드 제어 시스템을 구축하여 계통 고립 상황에서도 48시간 이상 자립 운전이 가능합니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">3.2 호소수(영암호·금호호) 열교환과 액체냉각 하이브리드 PUE 1.15 달성</h3>
  <p>솔라시도 인근의 풍부한 담수 자원(영암호)을 활용한 간접 수냉식 프리쿨링(Free Cooling) 시스템과 칩 직접 액체냉각(D2C) 기술을 결합하여, 여름철 피크 시에도 연평균 <strong>PUE 1.15 이하</strong>를 유지하도록 설계되었습니다.</p>

  <p>호소수를 간접 열교환 방식으로 활용함으로써 환경 오염과 수온 상승 영향을 배제하면서도 냉각탑 가동에 필요한 물 증발량을 기존 대비 80% 이상 절감합니다.</p>

  <!-- 4장: 국산 AI 반도체 실증 및 소버린 AI 생태계 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🌐 4. 국산 AI 반도체(NPU) 실증 및 소버린 AI 생태계 육성</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">4.1 토종 NPU 상용화 검증 트랙과 전력 대 효율비 극대화</h3>
  <p>리벨리온의 REBEL 및 퓨리오사AI의 RENEGADE 등 국산 차세대 NPU는 LLM 추론 영역에서 엔비디아 GPU 대비 <strong>전력 대 성능비(TOPS/Watt)를 2배 이상 개선</strong>하도록 설계되었습니다. 국가 AI 컴퓨팅센터는 이들 NPU를 공공 행정 및 금융, 제조 도메인 AI 서비스에 투입하여 대규모 양산 레퍼런스를 제공합니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">4.2 풀스택 AI 소프트웨어 프레임워크 표준화 지원</h3>
  <p>국산 NPU의 최대 과제인 소프트웨어 호환성을 해결하기 위해 PyTorch, ONNX, vLLM과의 완전 통합을 지원하는 K-AI 통합 컴파일러 스택을 센터 내 표준 런타임으로 배포합니다.</p>

  <!-- 5장: 인프라 기술 규격 비교 표 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">📊 5. 수도권 기존 데이터센터 vs 해남 솔라시도 국가 AIDC 비교</h2>

  <p>수도권 도심형 코로케이션 센터와 호남권 신재생 직결형 국가 AIDC의 핵심 엔지니어링 및 운영 지표를 비교한 결과는 다음과 같습니다:</p>

  <div style="margin: 24px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; border: 1px solid #CBD5E1;">
      <thead>
        <tr style="background-color: #0F172A; color: #FFFFFF;">
          <th style="padding: 12px 14px; border: 1px solid #334155;">비교 항목</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">수도권 도심형 데이터센터</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">해남 솔라시도 국가 AI 컴퓨팅센터</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">전력 조달 방식</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">한전 계통 의존 (화석연료 비중 높음)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">태양광·풍력 100% 직접 PPA (RE100)</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">에너지 효율 (연평균 PUE)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">PUE 1.35 ~ 1.55 (공랭/수랭 복합)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #2563EB;">PUE 1.15 이하 (호소수 간접 프리쿨링)</td>
        </tr>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">수전 대기 및 인허가</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">계통 포화로 수전 불허 또는 5년+ 지연</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">분산특구 전용 변전소 즉시 인입</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">단위 전력당 운영비(OPEX)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">한전 산업용(을) 고압 요금제 적용</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">직접 PPA 기반 장기 고정 단가 할인</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 6장: 서해안 초고압 직류송전(HVDC) 연계 및 지역 파급효과 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🏢 6. 서해안 HVDC 전력망 연계와 국토 균형 발전 비전</h2>

  <p>정부가 추진 중인 <strong>서해안 초고압 직류송전(HVDC) 해저 고속도로</strong>와 해남 솔라시도 센터가 연계됨으로써, 호남권에서 발생하는 잉여 신재생 전력을 서해안 벨트 전체의 전력 안정화 버퍼로 활용할 수 있습니다.</p>

  <p>수도권 과밀 해소와 더불어 전남 서남권 일대에 데이터센터 장비, 냉각 배관, 변전 설비 제조 기업들이 집적되는 <strong>'AI 에너지 밸리'</strong>가 조성되어 연간 수조 원의 생산 유발 효과와 고용 창출이 기대됩니다.</p>

<!-- 6장: 전남권 마이크로그리드 전력 품질 안정화 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚡ 6. 전남권 재생에너지 마이크로그리드 전력 품질 안정화 공학</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">6.1 태양광·풍력 변동성 대응: 대규모 BESS 주파수 조정(Fast Frequency Response)</h3>
  <p>태양광 발전은 일사량 변화와 구름 유입에 따라 출력이 급변하며 계통 주파수 변동(60Hz 이탈)을 초래합니다. 솔라시도 단지에는 500MWh 규모의 LFP 기반 <strong>단주기 주파수 제어용 BESS</strong>와 정지형 무효전력 보상장치(STATCOM)를 병렬 배치하여 0.05초 이내에 전압 및 주파수 변동을 보정합니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">6.2 24/7 CFE(무탄소 에너지) 실시간 시간별 매칭 메커니즘</h3>
  <p>단순 연간 총량 기준의 REC 구매가 아닌, 매 시간 단위로 재생에너지 발전량과 데이터센터 전력 소비량을 1:1로 일치시키는 <strong>24/7 CFE 실시간 매칭 소프트웨어</strong>를 도입합니다. 야간 시간대에는 신안 해상풍력 전력과 주간에 저장된 BESS 방전 전력을 우선 소비하도록 부하 스케줄링을 최적화합니다.</p>

  <!-- 수식 카드 2: 24/7 CFE 매칭 지수 방정식 -->
  <div style="background-color: #F1F5F9; border-left: 4px solid #6366F1; padding: 20px 22px; border-radius: 6px; margin: 20px 0; font-size: 15px;">
    <strong>📐 24/7 CFE 실시간 무탄소 에너지 매칭 지수 방정식:</strong><br>
    <code style="font-size: 16px; font-weight: 700; color: #0F172A;">CFE_score = ( ∑_t min(Renewable_t + BESS_discharge_t, Load_t) ) / ( ∑_t Load_t ) × 100%</code><br>
    <span style="font-size: 13px; color: #475569;">
      • t: 1년 8,760시간 단위 인덱스, Renewable_t: 현지 태양광/풍력 실시간 발전량 (MW)<br>
      • Load_t: 솔라시도 AIDC 실시간 소비 부하 (MW)<br>
      • 솔라시도 단지는 태양광-풍력 복합 믹스 및 BESS 연계를 통해 연간 24/7 CFE 달성률 98% 이상을 목표로 합니다.
    </span>
  </div>

  <!-- 결론 요약 박스 -->
  <div style="background-color: #F8FAFC; border: 2px solid #6366F1; border-radius: 10px; padding: 26px; margin-top: 36px;">
    <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 700; color: #4338CA;">💡 핵심 요약 및 정책적 시사점</h3>
    <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.8;">
      <li><strong>초대형 공용 인프라:</strong> 2.5조 원 투입, 2028년 GPU 1.5만 장 및 2030년 5만 장 규모의 국가 연산 거점 구축.</li>
      <li><strong>계통 분산화 실증:</strong> 분산에너지법에 따른 직접 PPA 특례로 호남권 재생에너지를 현지 소비(Load-to-Power).</li>
      <li><strong>국산 반도체 육성:</strong> 상용 워크로드의 20% 이상에 리벨리온, 퓨리오사AI 등 국산 NPU를 실증 탑재.</li>
      <li><strong>글로벌 그린 표준:</strong> 영암호 프리쿨링 및 액체냉각을 통해 연평균 PUE 1.15 달성 및 RE100 완전 연계.</li>
    </ul>
  </div>

</div>
