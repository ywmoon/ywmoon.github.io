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

<p>2026년 8월 3일, 전남 해남군 산이면 솔라시도 기업도시에서 대한민국 AI 연구와 첨단 산업의 핵심 두뇌가 될 <strong>'국가 AI 컴퓨팅센터' 착공식</strong>이 성대하게 개최되었습니다. 총사업비 약 2조 5,000억 원이 투입되는 이 센터는 부지 면적 4만 8,996㎡(연면적 1만 6,978㎡, 지상 2층) 규모로 건설되며, 2028년 완공을 목표로 하고 있습니다.</p>

  <p>이 사업은 삼성SDS가 주관하는 민관 합작법인인 <strong>'한국AI컴퓨팅센터(KOACC)'</strong>(네이버클라우드, 삼성물산, 카카오, KT 등 참여)가 건설 및 운영을 전담합니다. 수도권 중심의 데이터센터 과밀과 송전선로 병목을 극복하기 위해 제정된 <strong>분산에너지 활성화 특별법의 제1호 국가 프로젝트</strong>로서, 호남권 2.5GW 태양광 및 신안 해상풍력 재생에너지를 현지에서 직접 소비(Load-to-Power)하는 RE100 기반 AIDC 집적단지(최종 3.2GW)의 핵심 앵커 시설입니다.</p>

  <!-- 1장: 3단계 인프라 구축 로드맵 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🚀 1. 국가 AI 컴퓨팅센터 3단계 GPU/NPU 자원 공급 로드맵</h2>

  <div style="margin: 24px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
      <thead>
        <tr style="background-color: #0F172A; color: #F8FAFC;">
          <th style="padding: 14px 16px; font-weight: 700;">구분</th>
          <th style="padding: 14px 16px; font-weight: 700;">시점 및 예산</th>
          <th style="padding: 14px 16px; font-weight: 700; background-color: #3730A3;">연산 자원 구성</th>
          <th style="padding: 14px 16px; font-weight: 700;">지원 대상 및 인프라 역할</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #E2E8F0; background-color: #FFFFFF;">
          <td style="padding: 12px 16px; font-weight: 600; color: #334155;">1단계 (조기 서비스)</td>
          <td style="padding: 12px 16px; color: #475569;">2026.07 ~ 2027.03<br><span style="font-size: 12px; color: #64748B;">(153억 원)</span></td>
          <td style="padding: 12px 16px; color: #4338CA; font-weight: 600;">엔비디아 H100 + 최신 B300(블랙웰 울트라) GPU 풀</td>
          <td style="padding: 12px 16px; color: #475569;">국내 대학·학계·출연연 대상 초거대 LLM 기초 연구 자원 공급</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 600; color: #334155;">2단계 (센터 준공)</td>
          <td style="padding: 12px 16px; color: #475569;">2028년 상반기<br><span style="font-size: 12px; color: #64748B;">(1차 인프라 가동)</span></td>
          <td style="padding: 12px 16px; color: #4338CA; font-weight: 600;">고성능 GPU 1만 5,000장 직접 수용 (초고속 인터커넥트)</td>
          <td style="padding: 12px 16px; color: #475569;">국내 AI 스타트업, 바이오·제조·금융 특화 모델 학습 및 추론</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0; background-color: #FFFFFF;">
          <td style="padding: 12px 16px; font-weight: 600; color: #334155;">3단계 (풀스택 확장)</td>
          <td style="padding: 12px 16px; color: #475569;">2030년 목표<br><span style="font-size: 12px; color: #64748B;">(총사업비 2.5조 원)</span></td>
          <td style="padding: 12px 16px; color: #4338CA; font-weight: 600;">GPU 5만 장 + 국산 NPU(퓨리오사AI RNGD, 리벨리온 아톰 등)</td>
          <td style="padding: 12px 16px; color: #475569;">아시아 최대 공용 컴퓨팅 허브 구축 및 K-클라우드 생태계 완성</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 2장: 전력 계통 분산화 메커니즘 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚡ 2. 수도권 그리드락 극복을 위한 'Load-to-Power' 전력 계통 아키텍처</h2>

  <p>그동안 호남 지역은 전국 태양광 설비의 40% 이상이 집중되어 봄·가을 경부하기에 전력 생산이 수요를 초과하는 심각한 <strong>'발전 출력제어(Curtailment)'</strong>를 겪어왔습니다. 수도권으로 전력을 보내는 초고압 직류송전(HVDC) 선로 건설에는 최소 8~10년이 소요되어 계통 마비가 우려되는 상황이었습니다.</p>

  <p>해남 솔라시도 프로젝트는 **"전기를 도시로 보내지 말고, 전기를 많이 쓰는 데이터센터를 발전소 옆으로 옮기자"**는 <strong>'Load-to-Power'</strong> 개념을 국가 단위에서 최초로 실현한 사례입니다.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #6366F1; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #4338CA; margin-bottom: 4px;">1. 분산특구 직접 PPA를 통한 전기 요금 경쟁력 확보</div>
      <div style="font-size: 14px; color: #475569;">한전 전력망을 통과할 때 발생하는 송전망 이용요금을 내지 않고, 인근 솔라시도 태양광 발전소(98MW) 및 대규모 재생에너지 단지와 <strong>직접 전력구매계약(Direct PPA)</strong>을 체결하여 kWh당 전기 요금을 15~20% 절감합니다.</div>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #10B981; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #065F46; margin-bottom: 4px;">2. 물리적 100% RE100 인증 및 탄소국경세(CBAM) 대응</div>
      <div style="font-size: 14px; color: #475569;">가상 인증서(REC) 거래에 의존하지 않고, 물리적 송전선으로 연결된 무탄소 재생에너지만을 소비함으로써 글로벌 빅테크 및 수출 기업의 24/7 CFE(Carbon Free Energy) 요건을 완벽 충족합니다.</div>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #F59E0B; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #B45309; margin-bottom: 4px;">3. 마이크로그리드 BESS 연계로 간헐성 완벽 극복</div>
      <div style="font-size: 14px; color: #475569;">태양광 발전량이 떨어지는 야간에는 500MWh 규모의 대용량 배터리 저장장치(BESS)와 인근 LNG 열병합 발전원을 백업으로 연계하여 99.999% 무중단 전력을 보장합니다.</div>
    </div>
  </div>

  <!-- 3장: 이종 AI 반도체 클러스터링 및 오케스트레이션 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">💻 3. 엔비디아 GPU + 국산 NPU 이종(Heterogeneous) 클러스터링 공학</h2>

  <p>국가 AI 컴퓨팅센터의 핵심 차별점은 엔비디아 일변도의 인프라를 넘어 <strong>국산 NPU(퓨리오사AI RNGD, 리벨리온 Atom)를 단일 패브릭에 통합 오케스트레이션</strong>하는 하이브리드 아키텍처를 구현한 점입니다.</p>

  <ul>
    <li><strong>초거대 모델 학습:</strong> 고대역폭 메모리(HBM3e)와 800Gbps NDR InfiniBand 네트워크를 갖춘 엔비디아 B300 클러스터에 집중 배치.</li>
    <li><strong>고효율 모델 추론 및 서빙:</strong> 전력 효율(TOPS/Watt)이 3배 이상 높은 국산 NPU 풀로 트래픽을 자동 라우팅하여 추론 운영 비용을 60% 절감.</li>
    <li><strong>삼성 클라우드 플랫폼(SCP) 스케줄러:</strong> 이종 연산 노드 간의 워크로드를 슬럼(Slurm) 및 쿠버네티스(Kubernetes) 기반으로 실시간 최적 분배.</li>
  </ul>

  <!-- 4장: 영암호 수자원 간접 열교환 및 친환경 냉각 공학 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">💧 4. 영암호·서해 수자원을 활용한 간접 프리쿨링(Free Cooling) 수랭 설계</h2>

  <p>해남 솔라시도 센터는 인근 영암호의 풍부한 담수 및 서해 바닷물을 이용하는 <strong>폐쇄형 간접 수랭 열교환 시스템</strong>을 구축하여, 냉각탑 증발로 인한 수자원 낭비(WUE)를 80% 줄이고 연평균 PUE 1.15 이하를 달성합니다.</p>

  <ul>
    <li><strong>동절기·간절기 프리쿨링:</strong> 영암호 수온이 15℃ 이하로 내려가는 동절기 5개월간 냉동기(Chiller)를 완전히 끄고 열교환기만으로 100% 칩셋 냉각.</li>
    <li><strong>열오염 방지 및 폐열 캐스케이드:</strong> 데이터센터에서 배출되는 온수는 인근 솔라시도 스마트팜 온실 난방 및 수산 양식장에 열원으로 직결 공급.</li>
  </ul>

  <!-- 5장: 업계 임원 발언 및 정책적 시사점 -->
  <h2 style="border-left: 5px solid #6366F1; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🏢 5. 삼성SDS 및 정부 리더십의 전략적 제언</h2>

  <blockquote style="border-left: 4px solid #6366F1; background-color: #F8FAFC; margin: 20px 0; padding: 18px 22px; font-style: italic; color: #334155;">
    "이번 국가 AI 컴퓨팅 사업과 해남 솔라시도 센터 착공을 통해 국내 연구자들이 GPU 부족으로 연구를 중단하는 일이 없도록 세계 최고 수준의 AI 인프라를 안정적으로 공급할 것입니다. 엔비디아의 최신 블랙웰 울트라(B300)뿐만 아니라 우수한 국산 NPU까지 포괄하는 하이브리드 컴퓨팅 풀을 구축하여 대한민국의 소버린 AI 경쟁력을 기술과 인프라 양면에서 뒷받침하겠습니다."
    <div style="font-style: normal; font-size: 13px; font-weight: 600; color: #64748B; margin-top: 8px;">— 삼성SDS 클라우드서비스사업부장 이호준 부사장</div>
  </blockquote>

  <!-- 결론 카드 -->
  <div style="background-color: #EEF2FF; border: 1px solid #C7D2FE; border-left: 4px solid #6366F1; border-radius: 8px; padding: 22px; margin-top: 36px;">
    <h3 style="margin: 0 0 8px 0; font-size: 17px; font-weight: 700; color: #3730A3;">💡 분산에너지 정책 & 계통 분산화 핵심 과제: '전력 따라 움직이는 데이터센터'의 본격화</h3>
    <p style="margin: 0; font-size: 14px; color: #312E81; line-height: 1.75;">
      해남 솔라시도 국가 AI 컴퓨팅센터 착공은 국내 데이터센터 산업 지도가 <strong>'수도권 인근의 전력 소비자'에서 '지방 재생에너지 산지의 전력 거점'</strong>으로 영구 재편되는 변곡점입니다. 향후 성공의 관건은 초고속 백본 광통신망(망 지연시간 &lt;5ms)의 안정적 구축과, 호남 지역 내 연구 인력 및 AI 산업 생태계의 성공적인 유치에 달려 있습니다.
    </p>
  </div>

</div>
